import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.config = {
    ...JSON.parse(toolbox.filesystem.read('.egenrc')),
    ...toolbox.config,
    ...JSON.parse(toolbox.filesystem.read('.egenrc.json')),
    ...toolbox.config.loadConfig('egen', process.cwd()),
  }
}
