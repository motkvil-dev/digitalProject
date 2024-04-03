import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box, Grid} from '@mui/material'
import { Canvas, useFrame } from '@react-three/fiber'
import MyMesh from './components/iuMesh'
import './App.css'
import { PerspectiveCamera } from '@react-three/drei'
import DUXUI from './components/duxui'
import DGraph from './components/dgraph'
import DWeb from './components/dWeb'
import Theme from './assets/themeConfig'




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

  /**useEffect(()=>{
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

  },[trigger]) */


  return (
    <Box
      position={'relative'}
      bgcolor={Theme.palette.primary.main}
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

          <ambientLight intensity={.3} />
          <hemisphereLight color="white" groundColor={Theme.palette.primary.light} />
          <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} />
          <MyMesh color={'white'} setOpen={setOpen} open={open} position={[0,0,0]} 
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
            color={Theme.palette.primary.dark}
          >
            <Box>DDD-UX</Box>
          </Box>
          <Box fontSize={20} textAlign={'left'} fontWeight={400} className='fontMontserrat' color={Theme.palette.primary.dark} >
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
        overflow={'auto'}
        top={0} left={0}
      >

        <Box
          className='fontMontserrat'
          fontWeight={400}
        >
          DDD-UX
        </Box>

        <Grid container>

          <Grid item xs={12} md={6} >
            <Box
              className='fontBebas textShadow'
              padding={1} fontSize={50}
              marginTop={10} color={Theme.palette.primary.dark}
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
                    bgcolor={valueInit===item.id?Theme.palette.primary.main:undefined}
                    padding={1} mr={1} fontWeight={400}
                    key={index} className='fontMontserrat'
                    onClick={()=>setValueInit(item.id)}
                    style={{cursor:'pointer'}} color={Theme.palette.env.light}
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

          </Grid>

          <Grid item xs={12} md={6} >
          </Grid>

        </Grid>

        
      </Box>

    </Box>
  )
}

export default App
