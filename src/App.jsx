import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import MyMesh from './components/iuMesh'
import './App.css'
import { PerspectiveCamera } from '@react-three/drei'
import Theme from './assets/themeConfig'
import ServicesComp from './components/servicesComp'
import Footer from './components/footer'
import MenuComp from './components/menuComp'
import SocialNetComp from './assets/socialNetworks'
import BarComp from './assets/barComp'
import HeaderComp from './assets/headerComp'





function App() {
  const [open, setOpen] = useState(true)
  const [valueInit, setValueInit] = useState('duxui')
  const [trigger, setTrigger] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)


  const duxuiRef = useRef()
  const dgraphRef = useRef()
  const dwebRef = useRef()
  const init = useRef()



  useEffect(() => {
    if (open) {
      gsap.to('.box2', {
        height: '100vh',
        duration: 1,
        opacity:1
      })
      gsap.to('.box3', {
        height: 0,
        opacity:0,
        duration: 1,
      })

      gsap.fromTo('.box3',{
      overflow: 'auto',
      },{
        overflow:'hidden',
        duration:1,
        delay:1
      })

    } else {

      gsap.to('.box2', {
        height: 0,
        duration: 1,
        opacity:0
      })
      gsap.to('.box3', {
        height: '100vh',
        opacity:1,
        duration: 1
      })

      gsap.to('.box3', {
        overflow:'auto',
        duration: 1,
        delay:1
      })
    }

  }, [open])


  useEffect(() => {
        
    const timer = setInterval(() => {
        
        switch (valueInit) {
          case 'duxui':
            setValueInit('dgraph')
            break;
          
          case 'dgraph':  
            setValueInit('dweb')
            break;

          case 'dweb':
            setValueInit('duxui')
            break;
        
          default: 'duxui'
            break;
        }
        
    }, 5000);
    

    return () => clearInterval(timer);

  }, [valueInit])


  

  return (
    <Box
      position={'relative'}
      bgcolor={'white'}
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
        className='mimiBox'
      >
        <Canvas>

          <ambientLight intensity={.3} />
          <hemisphereLight color={'white'} groundColor={Theme.palette.primary.main} />
          <directionalLight position={[3,3,3]} color={Theme.palette.primary.main} intensity={5}/>
          <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} />

          <MyMesh color={Theme.palette.env.light} open={open} position={[0, 0, -5]}
            setTrigger={setTrigger} trigger={trigger} args={[4,40,40]}
          />

          <MyMesh color={Theme.palette.primary.light} open={open} position={[7, 3, -9]}
            setTrigger={setTrigger} trigger={trigger} args={[2,40,40]}
          />

          <MyMesh color={Theme.palette.primary.light} open={open} position={[-4, -3, -9]}
            setTrigger={setTrigger} trigger={trigger} args={[2,40,40]}
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
        onClick={() => setOpen(!open)}
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
            fontSize={60}
            textAlign={'center'}
            onClick={() => setOpen(!open)}
            className='fontBebas'
            color={Theme.palette.env.light}
          >
            <Box>MOTK DESIGN</Box>
          </Box>
          <Box 
            fontSize={16} 
            textAlign={'left'} 
            fontWeight={400} 
            className='fontMontserrat' 
            color={Theme.palette.env.light} 
          >
            <Box>
              Diseño UX-UI / Diseño Gráfico / Diseño web
            </Box>
          </Box>
        </Box>

      </Box>

      {/**INIT*/}
      <Box
        width={'100vw'}
        className='box3'
        color={Theme.palette.env.light}
        height={0}  position={'absolute'}
        overflow={'hidden'}
        top={0} left={0}
        onScroll={()=>{console.log()}}
      >

        <MenuComp  menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <BarComp init={init} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
        
        <HeaderComp init={init} valueInit={valueInit} setValueInit={setValueInit}  
          duxuiRef={duxuiRef} dgraphRef={dgraphRef} dwebRef={dwebRef}
          setTrigger={setTrigger}
        />

        <SocialNetComp/>
        <ServicesComp duxuiRef={duxuiRef} dgraphRef={dgraphRef} dwebRef={dwebRef}/>
        <Footer/>

        
      </Box>
        

    </Box>
  )
}

export default App
