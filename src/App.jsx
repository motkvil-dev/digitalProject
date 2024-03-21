import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box } from '@mui/material'
import { Canvas, useFrame } from '@react-three/fiber'
import MyMesh from './components/iuMesh'
import './App.css'





function App() {
  const [open, setOpen] = useState(true)
  
  useEffect(()=>{
    if(open){
      gsap.to('.box2',{
        height:'100vh',
        duration:1
      })
      
    }else{
      
      gsap.to('.box2',{
        height:0,
        duration:1
      })
    }
  },[open])

  return (
    <Box
      position={'relative'}
      bgcolor={'gray'}
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'hidden'}
    >
      <Box
        width={'100vw'}
        className='box2'
        bgcolor={'black'}
        position={'absolute'}
        color={'white'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        overflow={'hidden'}
        top={0}
      />

      <Box
        position={'absolute'}
        left={0} 
        height={'100vh'}
        width={'100vw'}
        className='iuBox'
      >
        <Canvas>
          <hemisphereLight
            groundColor={'red'}
            color={'yellow'}
          />

          <MyMesh setOpen={setOpen} open={open} position={[0,0,0]} />
          <MyMesh setOpen={setOpen} open={open} position={[0,0,0]} />

        </Canvas>
      </Box>

      <Box
        width={'100vw'}
        className='box2'
        position={'absolute'}
        color={'white'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        overflow={'hidden'}
        top={0}
      >
        <Box paddingBottom={5} className='fontGlass'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Box 
            fontWeight={400} 
            fontSize={90} 
            textAlign={'center'} 
            pb={2} onClick={()=>setOpen(!open)}
          >
            <Box>DEL-UX</Box>
          </Box>
          <Box fontSize={20} textAlign={'left'}>
            <Box>☉ Diseño UX/UI</Box>
            <Box>☉ Diseño Gráfico</Box>
            <Box>☉ Programación web</Box>
          </Box>
        </Box>
      
      </Box>

    </Box>
  )
}

export default App
