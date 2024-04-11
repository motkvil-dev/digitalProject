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
   height={'100vh'} zIndex={6}
   position={'absolute'} right={0}
   bgcolor={'hsla(0,0%,100%,.5)'}
   className='menuBox helloBlur'
   onClick={()=>props.setMenuIsOpen(!props.menuIsOpen)}
  >

  </Box>
 )
}


export default MenuComp