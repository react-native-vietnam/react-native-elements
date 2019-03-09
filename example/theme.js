import { StyleSheet } from 'react-native'

export default {
  // colors
  colors: {
    primary: 'orange',
    secondary: '#8F0CE8',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    searchBg: '#303337',
    success: '#52c41a',
    error: '#ff190c',
    warning: '#faad14',
    disabled: 'hsl(208, 8%, 90%)',
    // Darker color if hairlineWidth is not thin enough
    divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    platform: {
      ios: {
        primary: '#007aff',
        secondary: '#5856d6',
        success: '#4cd964',
        error: '#ff3b30',
        warning: '#ffcc00'
      },
      android: {
        primary: '#2196f3',
        secondary: '#9C27B0',
        success: '#4caf50',
        error: '#f44336',
        warning: '#ffeb3b'
      }
    }
  },
  // fonts
  fonts: {
    android: {
      regular: {
        fontFamily: 'sans-serif'
      },
      light: {
        fontFamily: 'sans-serif-light'
      },
      condensed: {
        fontFamily: 'sans-serif-condensed'
      },
      condensed_light: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'light'
      },
      black: {
        // note(brentvatne): sans-serif-black is only supported on Android 5+,
        // we can detect that here and use it in that case at some point.
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      },
      thin: {
        fontFamily: 'sans-serif-thin'
      },
      medium: {
        fontFamily: 'sans-serif-medium'
      },
      bold: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      }
    },
    default: {
      regular: {
        fontFamily: 'Roboto'
      },
      light: {
        fontFamily: 'sans-serif-light'
      },
      condensed: {
        fontFamily: 'sans-serif-condensed'
      },
      condensed_light: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'light'
      },
      black: {
        // note(brentvatne): sans-serif-black is only supported on Android 5+,
        // we can detect that here and use it in that case at some point.
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      },
      thin: {
        fontFamily: 'sans-serif-thin'
      },
      medium: {
        fontFamily: 'sans-serif-medium'
      },
      bold: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      }
    }
  },
  // icons
  icons: {
    'github-alt': '#000000',
    'google-plus-official': '#dd4b39',
    'reddit-alien': '#fc461e',
    'stack-overflow': '#f27f33',
    angellist: '#1c4082',
    codepen: '#000000',
    envelope: '#000000',
    etsy: '#f2581e',
    facebook: '#3b5998',
    foursquare: '#0072b1',
    github: '#000000',
    gitlab: '#e14329',
    instagram: '#517fa4',
    linkedin: '#007bb6',
    medium: '#02b875',
    pinterest: '#cb2027',
    quora: '#a82400',
    soundcloud: '#f50',
    steam: '#c6c3c1',
    stumbleupon: '#EB4823',
    tumblr: '#32506d',
    twitch: '#6441A5',
    twitter: '#00aced',
    vimeo: '#aad450',
    wechat: '#7bb32e',
    wordpress: '#21759b',
    youtube: '#bb0000'
  }
}
