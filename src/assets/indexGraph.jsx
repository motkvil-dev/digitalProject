import { Canvas, useFrame } from '@react-three/fiber'
import './indexGraph.css'
import { Box } from '@mui/material'
import Theme from './themeConfig'
import { useEffect, useRef } from 'react'
import GraphMesh from './indexGraphMesh'


const IndexGraph = () => {

 return(
  <Box>
   <div className='view'>
    <div className="base">
     <div className='case1'>

     </div>
     <div className='screen'>

      <div className='notch'>
       <div className='notchComp'>
        <div className='speaker'/>
        <div className='camera'/>
       </div>
      </div>

     </div>
    </div>
   </div>

   <Box height={'70vh'}>
    <Canvas>
     <hemisphereLight intensity={4} color={'yellow'} groundColor={Theme.palette.primary.dark}/>

     <GraphMesh/>

    </Canvas>
   </Box>
  </Box>
 )
}

export default IndexGraph