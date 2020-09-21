import { GluegunToolbox } from 'gluegun'
import { resolve } from 'path'
import genConfig from '../utils/genConfig'

module.exports = {
  name: 'egen',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, print } = toolbox
    print.success(print.colors.bold('Easy-Generate'))
    print.colors.enable()
    const init = Boolean(parameters.options['init'])
    if (!init) {
      return print.printHelp(toolbox)
    }



    toolbox.filesystem.write(
      resolve(toolbox.filesystem.cwd(), 'egen.config.json'),
      genConfig({}, {}, {})
    )

    print.info(`Easy-generator config in ${toolbox.filesystem.cwd()}/.egenrc`)
  }
}
