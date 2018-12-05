const testrunner = require('testrunner')
const { configuration } = require('./configuration')
const { generateReports } = require('./reporter')

async function run() {
  // get results
  const results = await testrunner(configuration)
  // generate reports
  await generateReports({
    fileName: 'act-axe-result',
    outputDirectory: 'output',
    fileContent: results
  })
  // exit
  process.exit()
}

// run
run()
