import { useRef } from "react"
import Theme from "./themeConfig"
import { useFrame } from "@react-three/fiber"





const GraphMesh = () => {

 const refGeo = useRef()

 useFrame(({clock})=>{
  refGeo.current.rotation.x = clock.elapsedTime * 0.5
  refGeo.current.rotation.z = clock.elapsedTime * 0.5
 })

 return(
  <mesh ref={refGeo}>
   <sphereGeometry args={[1.3,10,10]}/>
   <meshStandardMaterial flatShading color={Theme.palette.primary.light} />
  </mesh>
 )
}


export default GraphMesh