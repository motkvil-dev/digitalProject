import { Float, Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Theme from "../themeConfig";
import gsap from "gsap";
import randomNumber from "../utils/randomNumber";




export default function LaptopModel(props) {

 const {nodes, materials} = useGLTF('/models/Laptop.glb')
  const miRef = useRef()


 
 
 useEffect(()=>{
  console.log(materials)
 },[])


 useFrame(({clock})=>{

  miRef.current.rotation.x = clock.elapsedTime * .1


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