const testRunner = require('testrunner')
const { configuration } = require('./configuration')
const { generateReports } = require('./reporter')

async function run() {
  try {
    const results = await testRunner(configuration)
    // generate reports
    await generateReports({
      fileName: 'act-axe-result',
      outputDirectory: 'output',
      fileContent: results
    })
  } catch (err) {
    throw new Error(err)
  }
}

// run
run()
