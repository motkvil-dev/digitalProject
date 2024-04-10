import {deepPurple, purple} from '@mui/material/colors'

const Theme = {
 palette: {
  primary: {
   light: deepPurple[300],
   main: deepPurple[500],
   dark: deepPurple[700],
  },
  secondary: {
   light: purple[300],
   main: purple[500],
   dark: purple[700],
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