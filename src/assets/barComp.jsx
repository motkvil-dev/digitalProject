import {Box, Hidden} from '@mui/material'
import Theme from './themeConfig'
import MenuIcon from '@mui/icons-material/Menu';
import scrollToMyElement from './scrollToMyElement';

export default function BarComp(props) {

  const indexFunction = (ref, setOpen) => {

    if(props.open === 'home'){

      scrollToMyElement(undefined, ref)
    }
    setOpen('home')
  }
 
 return (
  <Box>
    <Box
      width={'100vw'}
      className='fontMontserrat helloBlur flex' padding={1}
      fontWeight={300} 
      boxShadow={'0px 2px 5px hsla(0,0%,0%,.1)'}
      bgcolor={'hsla(0,0%,100%,.0)'}
      display={'flex'} alignItems={'center'}
      zIndex={5} position={'fixed'} 
    >
      <Box flexGrow={5} display={'flex'}>
        <Box
          color={Theme.palette.env.light}
          border={2} borderColor={Theme.palette.primary.main}
          onClick={()=>setOpen(!open)} fontSize={10}
          style={{cursor:'pointer'}} padding={1} 
          borderRadius={2} bgcolor={Theme.palette.primary.main}
        >

          <h1>MOTK DESIGN</h1>
        </Box>
      </Box>  

      
      <Hidden mdDown>
        <Box display={'flex'} justifyContent={'space-around'} flexGrow={1} color={Theme.palette.env.dark} fontWeight={700}>
          <Box onClick={()=>indexFunction(props.init,props.setOpen)} margin={1} style={{cursor:'pointer'}}>Inicio</Box>
          <Box onClick={()=>props.setOpen('us')} margin={1} style={{cursor:'pointer'}}>Nosotros</Box>
          <Box onClick={()=>props.setOpen('portfolio')} margin={1} style={{cursor:'pointer'}}>Portafolio</Box>
          <Box margin={1} style={{cursor:'pointer'}}>Contactanos</Box>
          <Box margin={1} style={{cursor:'pointer'}}>Inicia sesión</Box>
        </Box>
      </Hidden>

      <Box 
        color={Theme.palette.env.dark} 
        style={{cursor:'pointer'}} 
        pr={3} flexGrow={1} textAlign={'right'}
        onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)}
      >
        <MenuIcon />
      </Box>
    </Box>
  </Box>
 )
}