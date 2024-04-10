import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


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
            z:8, x:0,
            duration:1,
        })
      } else {
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x,
          duration:1,
        },{
            z:3, x:1,
            duration:1,
        })

      }

      
    })

  
    return (
      <mesh  position={props.position} ref={uiRef} >
        <sphereGeometry args={[4,5,1]}/>
        <meshStandardMaterial color={props.color}

        />
      </mesh>
    )
  }

