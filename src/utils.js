const fsExtra = require('fs-extra')

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
  writeFile
}
