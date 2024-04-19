import { Float, Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Theme from "../themeConfig";
import gsap from "gsap";
import randomNumber from "../utils/randomNumber";
import { Vector3 } from "three";




export default function LaptopModel(props) {

 const {nodes, materials} = useGLTF('/models/Laptop.glb')
  const miRef = useRef()


 
 
 useEffect(()=>{
  
 },[])


 useFrame(({clock, camera})=>{


  gsap.to(camera.position,{
    x:0,y:0,z:4.3,
    onUpdate: camera.lookAt(new Vector3(0,0,3.4)),
    duration:1.5,
  })

 })



 return (

  <group
    rotation={[.5,2.5,0]} 
    position={[-.19,-.04,3.4]}
    ref={miRef}
  >
  

  <mesh 
    geometry={nodes.laptop.children[0].geometry}
    material={nodes.laptop.children[0].material}
  />

  <mesh
    geometry={nodes.laptop.children[1].geometry}
    material={nodes.laptop.children[1].material}
  />

  <mesh
    geometry={nodes.laptop.children[2].geometry}
    material={nodes.laptop.children[2].material}
  />

  {/** */}


  <mesh
    geometry={nodes.laptop_1.children[0].geometry}
    material={nodes.laptop_1.children[0].material}
  />

  <mesh
    geometry={nodes.laptop_1.children[1].geometry}
    material={nodes.laptop_1.children[1].material}
  />

  <mesh
    geometry={nodes.laptop_1.children[2].geometry}
    material={nodes.laptop_1.children[2].material}
  />

  {/** */}

  <mesh
    geometry={nodes.laptop_2.geometry}
    material={nodes.laptop_2.material}
  />

  <mesh
    geometry={nodes.laptop_2_1.geometry}
    material={nodes.laptop_2_1.material}
  />

  <mesh
    geometry={nodes.laptop_2_2.geometry}
    material={nodes.laptop_2_2.material}
  />

  <mesh
    geometry={nodes.laptop_3.geometry}
    material={nodes.laptop_3.material}
  />

  <mesh
    geometry={nodes.laptop_3_1.geometry}
    material={nodes.laptop_3_1.material}
  />

  <mesh
    geometry={nodes.laptop_3_2.geometry}
    material={nodes.laptop_3_2.material}
  />



  </group>
    
  
  

 )
}