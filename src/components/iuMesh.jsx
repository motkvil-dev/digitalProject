import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float } from '@react-three/drei'


export default function MyMesh (props){

    const uiRef = useRef()

    useFrame(({clock, camera})=>{
      uiRef.current.rotation.x = clock.getElapsedTime() * 0.1
      uiRef.current.rotation.z = clock.getElapsedTime() * 0.1

      if(props.open === 'index'){
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x, y:camera.position.y,
          duration:1,
        },{
            z:20, x:0, y:0,
            duration:1,
        })
      } else if (props.open === 'home') {
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x, y:camera.position.y, 
          duration:1,
        },{
            z:10, x:5, y:0,
            duration:1,
        })

      } else if (props.open === 'us') {
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x, y:camera.position.y,
          duration:1,
        },{
            y:8, z:16, x:8,
            duration:1,
        })

      } 
      
    })

  
    return (
        <mesh  position={props.position} ref={uiRef} >
          <sphereGeometry args={props.args}/>
          <meshStandardMaterial color={props.color}
            roughness={.3} flatShading       
          />
        </mesh>

    )
  }

