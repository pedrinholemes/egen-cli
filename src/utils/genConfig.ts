export interface ReactConfig {
  directory?: string
  styles?: boolean
  type?: 'react' | 'react-native' | 'next'
}
export interface PageConfigProps extends ReactConfig { }
export interface ComponentConfigProps extends ReactConfig { }
export interface MainConfigProps {
  react: {
    styles?: boolean
    type?: 'react' | 'react-native' | 'next'
  },
}
export type GenConfig = (pageConfig: PageConfigProps, componentConfig: ComponentConfigProps, mainConfig: MainConfigProps) => string;
const genConfig: GenConfig = (pageConfig, componentConfig, mainConfig) => JSON.stringify(
  {
    main: mainConfig,
    options: {
      page: pageConfig,
      component: componentConfig
    }
  },
  null,
  2
)
export default genConfig
