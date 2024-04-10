import { Canvas, useFrame } from '@react-three/fiber'
import './indexGraph.css'
import { Box } from '@mui/material'
import Theme from './themeConfig'
import { useEffect, useRef } from 'react'
import GraphMesh from './indexGraphMesh'
import { Float, Html, Text } from '@react-three/drei'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const IndexGraph = () => {

 return(
  <Box
  >
   
   <div className="base">
    <Box bgcolor={Theme.palette.secondary.dark} className='case1 shadow'> 

     <div className='phoneButton'>
     </div>
    </Box>
    <div className='screen'>

      <div className='notch'>
        <div className='notchComp'>
          <div className='speaker'/>
          <div className='camera'/>
        </div>
      </div>

      <div className='picture'>
        <div className='montR'/>
        <div className='montL'/>
        <div className='sun'/>
      </div>

      <div className='loadBar'>
        <div className='progress' />
      </div>

      <div className='graphButton fontBebas'>
        Button
      </div>

      <Box 
       display={'flex'}
       justifyContent={'center'}
       alignItems={'center'}
       color={'hsla(30, 90%, 90%, 1)'}
       className='playIcon'
      >
        <div><PlayCircleOutlineIcon style={{fontSize:'50px'}} /></div>
      </Box>

    </div>

    
   </div>

  {/**
    
    <Box height={'70vh'}>
     <Canvas>
      <hemisphereLight intensity={4} color={'yellow'} groundColor={Theme.palette.primary.dark}/>
      <directionalLight position={[0,-.3,10]} color={Theme.palette.primary.main} intensity={2} />
      <Float speed={10}>
       <GraphMesh/>
      </Float>
 
      <Float speed={5}>
        <Text
         position={[0,-.3,2]}
         color={Theme.palette.primary.main}
         fontSize={.3}
        >
         
        </Text>
      </Float>
     </Canvas>
    </Box>
   
   */}
  </Box>
 )
}

export default IndexGraph