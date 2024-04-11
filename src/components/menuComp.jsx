import {Box} from '@mui/material'
import { useState, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import '../App.css'


const MenuComp = (props) => {
 
 useEffect(()=>{
 
  if (props.menuIsOpen) {
    gsap.to('.menuBox',{
      width:'100vw',
      duration:1,
      ease:'sine.inOut'
 
    })
  } else {
    gsap.to('.menuBox',{
      width:0,
      duration:1,
      ease:'sine.inOut'
    })
  }
 
 },[props.menuIsOpen])

 return (


  <Box
   height={'100vh'} zIndex={6} width={0}
   position={'absolute'} right={0}
   bgcolor={'hsla(0,0%,100%,.7)'}
   className='menuBox helloBlur'
   onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)}
  >


   <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
   >

   {
    [
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
 )
}


export default MenuComp