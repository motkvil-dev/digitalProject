import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function MyMesh (props){
    let myColor = new THREE.Color('hsl(0,100%,100%)')
    const uiRef = useRef()
    console.log(myColor)
    useFrame(({clock, camera})=>{
      uiRef.current.rotation.x = clock.getElapsedTime() * 0.1
      uiRef.current.rotation.z = clock.getElapsedTime() * 0.1

      if(props.open){
        gsap.to(camera.position,{
            z:10, x:0,
            duration:1,
        })
      } else {
        gsap.to(camera.position,{
            z:5, x:2,
            duration:1,
        })


        

      }
    })
  
    return (
      <mesh  position={props.position} ref={uiRef} onClick={()=>props.setOpen(!props.open)} >
        <sphereGeometry args={[2,5,3]}/>
        <meshStandardMaterial color={props.color}/>
      </mesh>
    )
  }

