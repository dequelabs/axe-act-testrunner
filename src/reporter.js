const { writeFile } = require('./utils')

/**
 * @param {Object} param composite object with details to generate report
 * @property {String} param.fileName name to be provided to the file
 * @property {String} param.outputDirectory directory into which reports are to be generated
 * @property {Object} param.fileContent data of the test runner
 * @returns {Promise} an asynchronous function that generates reports
 */
async function generateReports({ fileName, outputDirectory, fileContent }) {
  const fileNamePrefix = outputDirectory
    ? `${outputDirectory}/${fileName}`
    : fileName
  await writeFile(
    `${fileNamePrefix}.json`,
    JSON.stringify(fileContent, null, 2)
  )
}

// export
module.exports = {
  generateReports
}
