import { Float, Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Theme from "../themeConfig";
import gsap from "gsap";




export default function PhoneModel(props) {
 const groupRef = useRef()
 const { nodes, materials } = useGLTF('/models/Phone.glb')



 useFrame(({camera})=>{
  
  if(props.open === 'home') {
    gsap.to(camera.position,{
      x:0, y:0, z:4,
      duration:2
    })
  } else {

    gsap.to(camera.position,{
      x:5, y:5, z:5,
      duration:2
    })
  }

 })



 return (
    <Float ref={groupRef}>

      <group rotation={[0,2.6,0]}  {...props} dispose={null} position={[0,0,0]}>

        <group>
          <mesh
          geometry={nodes.mesh641155211.geometry}
          material={materials.mat5}
          />

          <mesh
          geometry={nodes.mesh641155211_1.geometry}
          material={materials.mat8}
          />

          <mesh
          geometry={nodes.mesh817659832.geometry}
          material={materials.mat15}
          />

          <mesh
          geometry={nodes.mesh817659832_1.geometry}
          material={materials.mat16}
          />

          <mesh
          geometry={nodes.mesh817659832_2.geometry}
          material={materials.mat17}
          />

          <mesh
          geometry={nodes.mesh1674681057.geometry}
          material={materials.mat23}
          />

          <mesh
          geometry={nodes.mesh1674681057_1.geometry}
          material={materials.mat24}
          />

          <mesh
          geometry={nodes.mesh1674681057_2.geometry}
          material={materials.mat25}
          />


          <mesh
          geometry={nodes.group15167646.geometry}
          material={nodes.group15167646.material}
          />

          <mesh
          geometry={nodes.group31295272.geometry}
          material={nodes.group31295272.material}
          />

          <mesh
          geometry={nodes.group40103501.geometry}
          material={nodes.group40103501.material}
          />

          <mesh
          geometry={nodes.group261416222.geometry}
          material={nodes.group261416222.material}
          />

          <mesh
          geometry={nodes.group291280508.geometry}
          material={nodes.group291280508.material}
          />

          <mesh
          geometry={nodes.group465359774.geometry}
          material={nodes.group465359774.material}
          />

          <mesh
          geometry={nodes.group641155211.geometry}
          material={nodes.group641155211.material}
          />

          <mesh
          geometry={nodes.group660411554.geometry}
          material={nodes.group660411554.material}
          />

          <mesh
          geometry={nodes.group660411554.geometry}
          material={nodes.group660411554.material}
          />
        </group>

        <group>
          <mesh
            geometry={nodes.group641155211.children[0].geometry}
            material={nodes.group641155211.children[0].material}
          />

          <mesh
            geometry={nodes.group641155211.children[1].geometry}
            material={nodes.group641155211.children[1].material}
          />
        </group>

        <group>
        <mesh
          geometry={nodes.group817659832.children[0].geometry}
          material={nodes.group817659832.children[0].material}
        />

        <mesh
          geometry={nodes.group817659832.children[1].geometry}
          material={nodes.group817659832.children[1].material}
        />

        <mesh
          geometry={nodes.group817659832.children[2].geometry}
          material={nodes.group817659832.children[2].material}
        />
        </group>

        <group>

          <mesh
          geometry={nodes.group849457402.geometry}
          material={nodes.group849457402.material}
          />

          <mesh
          geometry={nodes.group1013736083.geometry}
          material={nodes.group1013736083.material}
          /> 

          <mesh
          geometry={nodes.group1113113092.geometry}
          material={nodes.group1113113092.material}
          /> 

          <mesh
          geometry={nodes.group1120752718.geometry}
          material={nodes.group1120752718.material}
          /> 

          <mesh
          geometry={nodes.group1124957205.geometry}
          material={nodes.group1124957205.material}
          /> 

          <mesh
          geometry={nodes.group1152579848.geometry}
          material={nodes.group1152579848.material}
          /> 

          <mesh
          geometry={nodes.group1224932749.geometry}
          material={nodes.group1224932749.material}
          /> 

          <mesh
          geometry={nodes.group1251928019.geometry}
          material={nodes.group1251928019.material}
          /> 

          <mesh
          geometry={nodes.group1637273763.geometry}
          material={nodes.group1637273763.material}
          /> 

          <mesh
          geometry={nodes.group1638188736.geometry}
          material={nodes.group1638188736.material}
          /> 

          <mesh
          geometry={nodes.group1674681057.geometry}
          material={nodes.group1674681057.material}
          /> 

          <mesh
          geometry={nodes.group1821786415.geometry}
          material={nodes.group1821786415.material}
          /> 

          <mesh
          geometry={nodes.group1884584545.geometry}
          material={nodes.group1884584545.material}
          /> 

          <mesh
          geometry={nodes.group1896686979.geometry}
          material={nodes.group1896686979.material}
          /> 

          <mesh
          geometry={nodes.group1909018237.geometry}
          material={nodes.group1909018237.material}
          /> 

          <mesh
          geometry={nodes.group1910001921.geometry}
          material={nodes.group1910001921.material}
          /> 

          <mesh
          geometry={nodes.group1982349354.geometry}
          material={nodes.group1982349354.material}
          /> 

          <mesh
          geometry={nodes.group2136648518.geometry}
          material={nodes.group2136648518.material}
          />

        </group>

      <Text
        font="/fonts/Exo2.ttf" 
        position={[0,.4,-.1]}
        rotation={[0,3.15,0]}
        color={"white"}
        fontSize={.2}
      >
        Motk
      </Text>

      <Text
        font="/fonts/Exo2.ttf" 
        position={[0,.24,-.1]}
        rotation={[0,3.15,0]}
        color={"white"}
        fontSize={.1}
      >
        Design
      </Text>

      </group>

      
    </Float>
 )
}

useGLTF.preload('/models/Phone.glb')