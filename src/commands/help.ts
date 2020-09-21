import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'egen',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox
    print.success(print.colors.bold('Easy-Generate'))
    print.colors.enable()
    console.log(toolbox.meta.src)
    console.log(toolbox.meta.version())
    // await generateComponent(generate, name, print)

    print.info(`Easy-generator config in ${toolbox.filesystem.cwd()}/.egenrc`)
  }
}
