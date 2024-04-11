import {Box} from '@mui/material'
import { useState, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import '../App.css'


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