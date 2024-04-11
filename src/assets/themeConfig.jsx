import {deepOrange, orange} from '@mui/material/colors'

const Theme = {
 palette: {
  primary: {
   light: deepOrange[300],
   main: deepOrange[500],
   dark: deepOrange[700],
  },
  secondary: {
   light: orange[300],
   main: orange[500],
   dark: orange[700],
  },
  night: {
   light: 'hsla(0,0%,0%,1)',
   main: 'hsla(0,0%,0%,1)',
   dark: 'hsla(0,0%,0%,1)',
  },
  env: {
   light: 'hsla(0,0%,100%,1)',
   dark: 'hsla(0,0%,30%,1)'
  },
  shadow: 'hsla(0,0%,0%,1)',
 }
}

export default Theme