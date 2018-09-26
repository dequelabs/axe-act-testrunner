const {
  getFormattedResults,
  getMarkdownTableData,
  writeFile
} = require('./utils')

/**
 * @param {Object} param composite object with details to generate report
 * @property {Array<String>} param.types array of report types to be generated
 * @property {String} fileName name to be provided to the file
 * @property {String} outputDirectory directory into which reports are to be generated
 * @property {Object} results data of the test runner
 * @returns {Promise} an asynchronous function that generates reports
 */
async function generateReports({ types, fileName, outputDirectory, results }) {
  if (!types || !types.length) {
    throw new Error(
      'Log: TestRunner: No report types are provided. Allowed types are "json" or "markdown"'
    )
  }

  const fileData = await getFormattedResults(results)
  const fileNamePrefix = outputDirectory
    ? `${outputDirectory}/${fileName}`
    : fileName

  if (types.includes('json')) {
    await writeFile(`${fileNamePrefix}.json`, JSON.stringify(fileData, null, 2))
  }

  if (types.includes('markdown')) {
    await writeFile(`${fileNamePrefix}.md`, getMarkdownTableData(fileData))
  }
}

// export
module.exports = {
  generateReports
}

/**
 * TODO:JEY
 * We'll need the testrunner to generate some sort of standardized JSON. It'll have to include more than just the results. I suggest having the testrunner generate it, and from there we can generate the MD file here. It should look something like this:

{
  testSystem: {
    name: String,
    version: String,
    url: String
  },
  creator: {
    name: String,
    url: String
  },
  testEnvironment: {
    name: String,
    version: String,
    ...
  },
  ruleStatus: [
    ruleId: String,
    status: Enum,
    testCases: {
      [testcaseId]: Enum #status
    }
  ]
}


TODO:JEY - Be sure to add some tests to this repo at some point.
 */
