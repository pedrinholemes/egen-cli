const { build } = require('gluegun')

/**
 * Create the cli and kick it off
 */
async function run(argv) {
  const cli = build()
    .brand('egen')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'egen-*', hidden: true })
    .help() // provides default for help,
    .version() // provides default for version, v
    .create()
  const toolbox = await cli.run(argv)
  return toolbox
}

module.exports = { run }
