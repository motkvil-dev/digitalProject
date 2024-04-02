import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box } from '@mui/material'
import { Canvas, useFrame } from '@react-three/fiber'
import MyMesh from './components/iuMesh'
import './App.css'
import { PerspectiveCamera } from '@react-three/drei'
import DUXUI from './components/duxui'
import DGraph from './components/dgraph'
import DWeb from './components/dWeb'





function App() {
  const [open, setOpen] = useState(true)
  const[valueInit, setValueInit] = useState('duxui')
  const [trigger,setTrigger] = useState(false)
  
  useEffect(()=>{
    if(open){
      gsap.to('.box2',{
        height:'100vh',
        duration:1
      })
      gsap.to('.box3',{
        height:0,
        duration:1
      })
      
    }else{
      
      gsap.to('.box2',{
        height:0,
        duration:1
      })
      gsap.to('.box3',{
        height:'100vh',
        duration:1
      })
    }

  },[open])

  useEffect(()=>{
    if(trigger){
      
      gsap.to('.box3',{
        right:'auto',
        left:0,
        duration:.5
      })
      
    }else{
      
      gsap.to('.box3',{
        right:0,
        left:'auto',
        duration:.5
      })
    }

  },[trigger])


  return (
    <Box
      position={'relative'}
      bgcolor={'black'}
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'hidden'}
    >
      
      {/**CANVAS*/}
      <Box
        position={'absolute'}
        left={0} 
        height={'100vh'}
        width={'100vw'}
        className='iuBox'
      >
        <Canvas>

          <ambientLight intensity={0.1} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} />
          <MyMesh color={'red'} setOpen={setOpen} open={open} position={[0,0,0]} 
            setTrigger={setTrigger} trigger={trigger}
          />

        </Canvas>
      </Box>

      {/**INDEX*/}
      <Box
        width={'100vw'}
        className='box2'
        position={'absolute'}
        color={'black'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        overflow={'hidden'}
        top={0}
      >
        <Box paddingBottom={5}
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
            className='fontBebas'
          >
            <Box>DDD-UX</Box>
          </Box>
          <Box fontSize={20} textAlign={'left'} className='fontMontserrat'>
            <Box>☉ Diseño UX/UI</Box>
            <Box>☉ Diseño Gráfico</Box>
            <Box>☉ Diseño web</Box>
          </Box>
        </Box>
      
      </Box>

      {/**INIT*/}
      <Box
        width={'100vw'}
        className='box3'
        position={'absolute'}
        color={'white'}
        height={0}
        maxWidth={750}
        overflow={'auto'}
        top={0} right={0}
      >

        <Box
          className='fontBebas'
          padding={1} fontSize={50}
          marginTop={10}
        >
          ¿Que te ofrecemos?
        </Box>

        <Box 
          padding={1}
          display={'flex'}
        >

          {
            [
              {
                id:'duxui',
                title:'Diseño UX/UI'
              },{
                id:'dgraph',
                title:'Diseño Gráfico'
              },{
                id:'dweb',
                title:'Diseño Web'
              }].map((item,index)=>(
              <Box
                borderRadius={2}
                bgcolor={valueInit===item.id?'red':undefined}
                padding={1} mr={1}
                key={index} className='fontMontserrat'
                onClick={()=>setValueInit(item.id)}
                style={{cursor:'pointer'}}
              >
                {item.title}
              </Box>
            ))
          }

        </Box>

        {
          valueInit==='duxui'? <DUXUI setTrigger={setTrigger} trigger={trigger} /> :
          valueInit==='dgraph'? <DGraph setTrigger={setTrigger} trigger={trigger}/> :
          valueInit==='dweb'? <DWeb setTrigger={setTrigger} trigger={trigger}/>:
          undefined
        }        
        
      </Box>

    </Box>
  )
}

export default App
