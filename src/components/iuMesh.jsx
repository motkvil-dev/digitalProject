import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'




export default function MyMesh (props){

  const {nodes, materials} = useGLTF('/models/Laptop.glb')

    const uiRef = useRef()

    useFrame(({clock, camera, controls})=>{
      console.log(controls)
      

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
            z:15, x:-30, y:0,
            duration:1,
        })

      } else if (props.open === 'us') {

        
        gsap.fromTo(camera.position,{
          z:camera.position.z, x:camera.position.x, y:camera.position.y,
          duration:1,
        },{
            y:20, z:16, x:8,
            duration:1,
        })

        gsap.fromTo(camera.quaternion,{
          z:camera.quaternion.z, x:camera.quaternion.x, y:camera.quaternion.y,
          duration:1,
        },{
            y:20, z:16, x:8,
            duration:7
        })
        


      } 
      
    })


    useEffect(()=>{
    },[])

  
    return (

      <mesh  position={props.position} ref={uiRef} >
        <sphereGeometry args={props.args}/>
        <meshStandardMaterial color={props.color}
          roughness={.3} flatShading       
        />
      </mesh>

    )
  }

