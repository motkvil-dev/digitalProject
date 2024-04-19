import {Box, Hidden} from '@mui/material'
import { useState, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import '../App.css'
import Theme from '../assets/themeConfig'


const MenuComp = (props) => {




  
 useEffect(()=>{
 
  if (props.menuIsOpen) {
    gsap.to('.menuBox',{
      height:'auto',
      duration:.3,
      ease:'sine.inOut'
 
    })
  } else {
    gsap.to('.menuBox',{
      height:0,
      duration:.3,
      ease:'sine.inOut'
    })
  }
 
 },[props.menuIsOpen])

 return (

  <Box >
    <Hidden mdUp>

      <Box
      zIndex={6} height={0}
      position={'fixed'} top={75}
      width={'100%'}
      className='menuBox helloBlur'
      onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)}
      overflow={'hidden'} 
      display={'flex'} justifyContent={'center'}
      >


      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={'95%'} borderRadius={3}
        
      >

      {
        [
        {title:'Inicio', tag:'home'}, {title:'Nosotros', tag:'us'},{title:'Portafolio', tag:'portfolio'},
        {title:'Contactanos', tag:'contact'},{title:'Inicia sesión', tag:'login'},
        
        ].map((item,index)=>(
        <Box key={index} 
          padding={2} margin={.3}
          textAlign={'center'}
          className='fontMontserrat shadow'
          fontWeight={500}
          color={Theme.palette.env.light}
          fontSize={20} 
          borderRadius={3}
          bgcolor={Theme.palette.secondary.main}
          onClick={()=>props.setOpen(item.tag)}
          style={{cursor:'pointer'}}
        >

          {item.title}      
        </Box>
        ))
      }
      </Box>


      </Box>
    </Hidden>

    <Hidden mdDown>

      <Box
      zIndex={6} height={0}
      position={'fixed'} top={70} right={20}
      bgcolor={Theme.palette.secondary.main}
      className='menuBox helloBlur'
      onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)} borderRadius={3}
      overflow={'hidden'}
      >


      <Box
        width={'auto'} padding={2}
      >

      {
        ['mdDown',
        'Inicio',
        'Nosotros',
        'Portafolio',
        'Contactanos',
        'Inicia sesión'
        ].map((item,index)=>(
        <Box key={index} 
          padding={2}
          borderBottom={1}
          borderColor={Theme.palette.env.light}
          color={Theme.palette.env.light}
          className='fontMontserrat'
          fontSize={20} 
        >

          {item}      
        </Box>
        ))
      }
      </Box>


      </Box>
    </Hidden>
  </Box>


 )
}


export default MenuComp