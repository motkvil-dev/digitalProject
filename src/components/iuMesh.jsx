import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'


export default function MyMesh (props){
    const uiRef = useRef()
  
    useFrame(({clock, camera})=>{
      uiRef.current.rotation.x = clock.getElapsedTime() * 0.1
      uiRef.current.rotation.z = clock.getElapsedTime() * 0.1

      if(props.open){
        gsap.to(camera.position,{
            z:10, x:3,
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
      <mesh position={props.position} ref={uiRef} onClick={()=>props.setOpen(!props.open)} >
        <sphereGeometry args={[2,20,20]}/>
        <meshBasicMaterial flatShading wireframe/>
      </mesh>
    )
  }

