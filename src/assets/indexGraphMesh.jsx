import { useRef } from "react"
import Theme from "./themeConfig"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import { Float } from "@react-three/drei"




const GraphMesh = () => {

 const refGeo = useRef()

 useFrame(({clock})=>{
  refGeo.current.rotation.x = clock.elapsedTime * 0.5
  refGeo.current.rotation.z = clock.elapsedTime * 0.5
 })


 return(
  <Float speed={4}>
   <mesh ref={refGeo}>
    <sphereGeometry args={[1.3,10,10]}/>
    <meshStandardMaterial color={Theme.palette.primary.light} />
   </mesh>
  </Float>
 )
}


export default GraphMesh