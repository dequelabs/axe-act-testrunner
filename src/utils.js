const fsExtra = require('fs-extra')
const markdownTable = require('markdown-table')
const { rulesMap } = require('./rules-map')

/**
 * Expected-Vs-Obtained values of Auto-WCAG vs Axe-Core Results
 * and the output to be reported
 */
const wcagVsAxeResultsMap = {
  'passed-passes': 'automated',
  'passed-violations': 'incorrect',
  'passed-incomplete': 'semi-automated',
  'passed-inapplicable': 'automated', // * issue - https://github.com/auto-wcag/auto-wcag/issues/265
  'failed-passes': 'incorrect',
  'failed-violations': 'automated',
  'failed-incomplete': 'semi-automated',
  'failed-inapplicable': 'incorrect',
  'inapplicable-passes': 'automated', // * issue - https://github.com/auto-wcag/auto-wcag/issues/265
  'inapplicable-violations': 'incorrect',
  'inapplicable-incomplete': 'incorrect',
  'inapplicable-inapplicable': 'automated'
}

/**
 * Cell Style for the markdown table report type
 */
const ruleCellStatusStyle = {
  automated: 'background-color: lightseagreen; color: black; padding: 4px;',
  'semi-automated': 'background-color: orange; color: black; padding: 4px;',
  incorrect: 'background-color: red; color: white; padding: 4px;'
}

/**
 * Get style of cell based on rule status
 * Convenience method to get a table cell style for markdown cell contents
 * @param {String} status output result of a testcase, which is mapped to style of table cell
 * @returns {String} Style based on rule status
 */
function getCellStyle(status) {
  return ruleCellStatusStyle[status]
}

/**
 * Get rule status
 * @param {Array<Object>} ruleTestCasesResults results of all testcases per ruleId of Auto-WCAG
 * @returns {String} rule status
 */
function getRuleStatus(ruleTestCasesResults) {
  const anyIncorrect = ruleTestCasesResults.some(
    result => result.testcaseStatus === 'incorrect'
  )
  if (anyIncorrect) {
    return 'incorrect'
  }
  const anySemiAutomated = ruleTestCasesResults.some(
    result => result.testcaseStatus === 'semi-automated'
  )
  if (anySemiAutomated) {
    return 'semi-automated'
  }
  return 'automated'
}

/**
 * TODO:JEY
 * This function should be part of the testrunner.
 * The test engine should return its findings to the testrunner, the test runner should decide the status.
 * The rules for deciding the status shouldn't change between implementors.
 */
/**
 * Get testcase status
 * @param {Object} param composite object with attributes to compute testcase status
 * @property {Object} param.result result of testcase
 * @property {Object} param.testcase testcase
 * @returns {String} status of testcase
 */
function getTestCaseStatus({ result, testcase }) {
  const { passes, violations, incomplete, inapplicable } = result
  const wcagResult = [
    {
      key: 'passes',
      value: passes.length
    },
    {
      key: 'violations',
      value: violations.length
    },
    {
      key: 'incomplete',
      value: incomplete.length
    },
    {
      key: 'inapplicable',
      value: inapplicable.length
    }
  ].sort((a, b) => b.value - a.value)[0]
  const wcagResultKey =
    testcase.expected === 'failed' && violations.length > 0
      ? 'violations'
      : wcagResult.key
  const key = `${testcase.expected}-${wcagResultKey}`
  const out = wcagVsAxeResultsMap[key]
  return out
}

/**
 * Get formatted results
 * @param {Object} results results from test runner
 * @returns {Object} formatted data to be generated as reports
 */
function getFormattedResults(results) {
  const groupedResults = results.reduce((out, testcaseResult) => {
    if (!out[testcaseResult.ruleId]) {
      out[testcaseResult.ruleId] = []
    }
    out[testcaseResult.ruleId].push(testcaseResult)
    return out
  }, {})
  const finalResult = Object.keys(groupedResults).reduce(
    (out, ruleGroupKey) => {
      out.push({
        ruleId: ruleGroupKey,
        axeIds: rulesMap[ruleGroupKey],
        ruleStatus: getRuleStatus(groupedResults[ruleGroupKey]),
        testCaseResults: groupedResults[ruleGroupKey]
      })
      return out
    },
    []
  )
  return finalResult
}

/**
 * Get contents of markdown table
 * @param {Object} data formatted result
 * @returns {String} markdown table to be generated as report
 */
function getMarkdownTableData(data) {
  const tableData = [
    [
      'Auto-WCAG Rule Id',
      'Axe-Core Rule Id',
      'Rule Status',
      'Test Cases Results'
    ] // headers
  ]
  data.forEach(ruleData => {
    const row = []
    row.push(ruleData.ruleId)
    row.push(ruleData.axeIds)
    row.push(
      `<span style='${getCellStyle(ruleData.ruleStatus)}'> ${
        ruleData.ruleStatus
      } </span>`
    )
    row.push(
      ruleData.testCaseResults.reduce((out, result) => {
        const line = `<div style='display: block; margin: 4px'> <span style='${getCellStyle(
          result.testcaseStatus
        )}'>${result.testcaseStatus}</span> <a href='${result.testcaseUrl}'>${
          result.testcaseUrl.split('/').reverse()[0]
        }</a> </div>`

        if (!out.length) {
          out = line
          return out
        }

        out = `${out} <br> ${line}`
        return out
      }, ``)
    )
    tableData.push(row)
  })
  return markdownTable(tableData)
}

/**
 * Write file with given content
 * @param {String} filename name of the file to be written
 * @param {Object} data data to be written to the file
 * @retuns {Object} a promise
 */
async function writeFile(filename, data) {
  await fsExtra.outputFile(filename, data)
}

module.exports = {
  getCellStyle,
  getRuleStatus,
  getTestCaseStatus,
  getFormattedResults,
  getMarkdownTableData,
  writeFile
}
