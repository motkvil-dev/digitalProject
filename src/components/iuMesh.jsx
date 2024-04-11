import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float } from '@react-three/drei'


export default function MyMesh (props){
    let myColor = new THREE.Color('hsl(0,100%,100%)')
    const uiRef = useRef()

    useFrame(({clock, camera})=>{
      uiRef.current.rotation.x = clock.getElapsedTime() * 0.1
      uiRef.current.rotation.z = clock.getElapsedTime() * 0.1

      if(props.open){
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x,
          duration:1,
        },{
            z:12, x:0,
            duration:1,
        })
      } else {
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x,
          duration:1,
        },{
            z:10, x:5,
            duration:1,
        })

      }
      
    })

  
    return (
        <mesh  position={props.position} ref={uiRef} >
          <sphereGeometry args={props.args}/>
          <meshStandardMaterial color={props.color}
            roughness={.1}            
          />
        </mesh>

    )
  }

