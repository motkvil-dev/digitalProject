import { useEffect, useReducer, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box, Grid, Hidden, Link } from '@mui/material'
import { Canvas, useFrame } from '@react-three/fiber'
import MyMesh from './components/iuMesh'
import './App.css'
import { PerspectiveCamera } from '@react-three/drei'
import DUXUI from './components/duxui'
import DGraph from './components/dgraph'
import DWeb from './components/dWeb'
import Theme from './assets/themeConfig'
import MenuIcon from '@mui/icons-material/Menu';
import IndexGraph from './assets/indexGraph'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ServicesComp from './components/servicesComp'
import Footer from './components/footer'
import MenuComp from './components/menuComp'







function App() {
  const [open, setOpen] = useState(true)
  const [valueInit, setValueInit] = useState('duxui')
  const [trigger, setTrigger] = useState(false)
  const [rouletIsOn, setRouletIsOn] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)


  const duxuiRef = useRef()
  const dgraphRef = useRef()
  const dwebRef = useRef()

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

  
  


  /**
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.micu',{
      scrollTrigger: '.micu',
      x:500,
      duration:4,
      ease:'elastic.in'
    })
  })
   */

  

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
      bgcolor={'white'}
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'hidden'}
    >

      <MenuComp menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

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
      >

        <Box>
          <Box
            width={'100vw'}
            className='fontMontserrat helloBlur' padding={1}
            fontWeight={400}
            boxShadow={'0px 2px 5px hsla(0,0%,0%,.1)'}
            bgcolor={'hsla(0,0%,100%,.0)'}
            display={'flex'} alignItems={'center'}
            zIndex={5} position={'fixed'}
          >
            <Box flexGrow={5} display={'flex'}>
              <Box
                color={Theme.palette.secondary.dark}
                border={2} borderColor={Theme.palette.primary.main}
                onClick={()=>setOpen(!open)} fontSize={10}
                style={{cursor:'pointer'}} padding={1} 
                borderRadius={2}
              >

                <h1>MOTK DESIGN</h1>
              </Box>
            </Box>

            
            <Hidden smDown>
              <Box display={'flex'} justifyContent={'space-around'} flexGrow={1} color={Theme.palette.env.dark} fontWeight={700}>
                <Box margin={1} style={{cursor:'pointer'}}>Inicio</Box>
                <Box margin={1} style={{cursor:'pointer'}}>Nosotros</Box>
                <Box margin={1} style={{cursor:'pointer'}}>Portafolio</Box>
                <Box margin={1} style={{cursor:'pointer'}}>Contactanos</Box>
                <Box margin={1} style={{cursor:'pointer'}}>Inicia sesión</Box>
              </Box>
            </Hidden>

            <Box 
              color={Theme.palette.env.dark} 
              style={{cursor:'pointer'}} 
              pr={3} flexGrow={1} textAlign={'right'}
              onClick={()=>setMenuIsOpen(!menuIsOpen)}
            >
              <MenuIcon />
            </Box>
          </Box>
        </Box>
        

        <Box
          display='flex'
          justifyContent='center'
          pt={4}
        >
          <Box minHeight='100vh' width='100vw' maxWidth={1200}>
            <Grid container>

              <Grid item xs={12} md={7} >
                
                <Box mt={6}
                  height={'70vh'}
                >
                  <Box>
                    
                    <Box
                      padding={1} pt={2}
                      display={'flex'}
                    >

                      {
                        [
                          {
                            id: 'duxui',
                            title: 'Diseño UX/UI'
                          }, {
                            id: 'dgraph',
                            title: 'Diseño Gráfico'
                          }, {
                            id: 'dweb',
                            title: 'Diseño Web'
                          }].map((item, index) => (
                            <Box
                              borderRadius={3}
                              bgcolor={valueInit === item.id ? Theme.palette.secondary.dark : undefined}
                              padding={1} mr={1} fontWeight={600}
                              key={index} className='fontMontserrat'
                              onClick={() => setValueInit(item.id)}
                              style={{ cursor: 'pointer' }} 
                              color={valueInit === item.id ? 'white' : Theme.palette.secondary.dark}
                            >
                              {item.title}
                            </Box>
                          ))
                      }

                    </Box>

                    <Box minHeight={'80vh'} pb={10} display={'flex'} alignItems={'center'}>
                      {
                        valueInit === 'duxui' ? <DUXUI duxuiRef={duxuiRef} setTrigger={setTrigger} trigger={trigger} /> :
                          valueInit === 'dgraph' ? <DGraph dgraphRef={dgraphRef} setTrigger={setTrigger} trigger={trigger} /> :
                            valueInit === 'dweb' ? <DWeb dwebRef={dwebRef} setTrigger={setTrigger} trigger={trigger} /> :
                              undefined
                      }
                    </Box>

                  </Box>
                </Box>
                

              </Grid>
              
              <Hidden mdDown>

                <Grid item xs={12} md={5} >
                  <Box paddingTop={18} height={'100vh'}
                  >
                    <IndexGraph/>
                  </Box>
                </Grid>
              </Hidden>

            </Grid>
          </Box>



        </Box>

        <Box>

          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            {
              [
                {
                  icon:<i className="fa-brands fa-x-twitter"></i>,
                  title:'X-Twitter'
                },
                {
                  icon:<i className="fa-brands fa-facebook"></i>,
                  title:'Facebook'
                },
                {
                  icon:<i className="fa-brands fa-instagram"></i>,
                  title:'Instagram'
                },
                {
                  icon:<i className="fa-brands fa-whatsapp"></i>,
                  title:'Whatsapp'
                }
              ].map((item,index)=>(
                  <Box key={index} textAlign='center' className='fontExo2'>
                    <Box 
                      bgcolor={'hsla(0,0%,100%,.2)'}
                      className='shadow'
                      width={50} height={50}
                      borderRadius={3}
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      margin={1} fontSize={30}
                      style={{color:Theme.palette.primary.main}}
                    >
                      {item.icon}

                    </Box>
                    <Box color={Theme.palette.primary.main} fontSize={10}>{item.title}</Box>
                  </Box>
              ))
            }
                      
          </Box>
        </Box>
        
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

          <Box minHeight='100vh' width='100vw' maxWidth={1200}>

            <ServicesComp duxuiRef={duxuiRef} dgraphRef={dgraphRef} dwebRef={dwebRef}/>
          </Box>
        </Box>
        
        <Footer/>

        
      </Box>
        

    </Box>
  )
}

export default App
