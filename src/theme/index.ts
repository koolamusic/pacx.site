/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  cssVarPrefix: 'em',
  useSystemColorMode: false
}

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  config,
  components: { ...components },
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  space: {
    '4.5': '1.125rem'
  }
})
