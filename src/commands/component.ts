import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'component',
  description: 'Generate components with styled-components',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print
    } = toolbox
    print.info('Easy-Generate')

    const name = parameters.first
    const style = Boolean(parameters.options['no-style'])
    if (!name) {
      return print.error('Name not provided')
    }

    try {
      if (!style) {
        await generate({
          template: 'ReactTypescript/index-with-styles.tsx.ejs',
          target: `src/components/${name}/index.tsx`,
          props: { name }
        })

        await generate({
          template: 'ReactTypescript/styles.ts.ejs',
          target: `src/components/${name}/styles.ts`,
          props: { name }
        })
      } else {
        await generate({
          template: 'ReactTypescript/index.tsx.ejs',
          target: `src/components/${name}/index.tsx`,
          props: { name }
        })
      }
    } catch (err) {
      print.error('Error')
      print.error(err)
    }

    print.info(`Generated Component at src/components/${name}/`)
  }
}
