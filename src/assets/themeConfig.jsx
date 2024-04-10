import {red, orange} from '@mui/material/colors'

const Theme = {
 palette: {
  primary: {
   light: red[300],
   main: red[500],
   dark: red[700],
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