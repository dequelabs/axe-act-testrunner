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
