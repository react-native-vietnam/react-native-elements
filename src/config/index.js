import { Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import BackgroundImage from './BackgroundImage'
import theme from './theme'
import ViewPropTypes from './ViewPropTypes'
import ThemeProvider, { ThemeConsumer } from './ThemeProvider'
import withTheme from './withTheme'

const TextPropTypes = Text.propTypes

export {
  BackgroundImage,
  theme,
  getStatusBarHeight,
  ViewPropTypes,
  TextPropTypes,
  ThemeProvider,
  ThemeConsumer,
  withTheme
}
