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
        bgcolor={Theme.palette.secondary.main}
        className='shadow'
      >

      {
        ['mdUp',
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
          textAlign={'center'}
          className='fontMontserrat'
          fontSize={20} 
          borderRadius={3}
        >

          {item}      
        </Box>
        ))
      }
      </Box>


      </Box>
    </Hidden>

    <Hidden mdDown>

      <Box
      zIndex={6} height={0}
      position={'absolute'} top={0}
      bgcolor={'hsla(0,0%,100%,.9)'}
      className='menuBox helloBlur'
      onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)}
      overflow={'hidden'}
      >


      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={'100vw'}
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
          borderColor={'hsla(0,0%,0%,.5)'}
          textAlign={'center'}
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