import type light from './themes/light'

export type Theme = typeof light

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // noinspection JSUnusedGlobalSymbols
  export interface DefaultTheme extends Theme {}
}
