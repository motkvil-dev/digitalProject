import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box, Grid, Hidden } from '@mui/material'
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





function App() {
  const [open, setOpen] = useState(true)
  const [valueInit, setValueInit] = useState('duxui')
  const [trigger, setTrigger] = useState(false)
  const [rouletIsOn, setRouletIsOn] = useState(true)

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
        
    }, 3000);
    

    return () => clearInterval(timer);

  }, [valueInit])



  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.micu',{
      scrollTrigger: '.micu',
      x:500,
      duration:4,
      ease:'elastic.in'
    })
  })

  

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
      bgcolor={Theme.palette.env.light}
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
          <hemisphereLight color={'yellow'} groundColor={Theme.palette.primary.dark} />
          <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} />

          <MyMesh color={Theme.palette.primary.main} open={open} position={[0, 0, -5]}
            setTrigger={setTrigger} trigger={trigger}
          />

          <MyMesh color={Theme.palette.primary.light} open={open} position={[7, 3, -9]}
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
            fontSize={60}
            textAlign={'center'}
            onClick={() => setOpen(!open)}
            className='fontBebas'
            color={Theme.palette.primary.light}
          >
            <Box>MOTK DESIGN</Box>
          </Box>
          <Box 
            fontSize={16} 
            textAlign={'left'} 
            fontWeight={400} 
            className='fontMontserrat' 
            color={Theme.palette.primary.light} 
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
        position={'absolute'}
        color={Theme.palette.env.light}
        height={0} 
        overflow={'hidden'}
        top={0} left={0}
      >

        <Box
          bgcolor={'hsla(0,0%,100%,0)'}
          position={'fixed'}
          width={'100vw'}
          height={50}
          className='helloBlur'
          zIndex={5}
        />

        <Box
          className='fontMontserrat' padding={1}
          fontWeight={400}
          boxShadow={'0px 2px 5px hsla(0,0%,0%,.1)'}
          display={'flex'} alignItems={'center'}
          position={'fixed'} width={'100vw'} zIndex={5}
        >
          <Box flexGrow={10} color={Theme.palette.primary.main}
            onClick={()=>setOpen(!open)} fontSize={10}
          >
            <h1>MOTK DESIGN</h1>
          </Box>

          
          <Hidden smDown>
            <Box display={'flex'} flexGrow={1} color={Theme.palette.env.light} fontWeight={500}>
              <Box margin={1}>Home</Box>
              <Box margin={1}>About us</Box>
              <Box margin={1}>Portfolio</Box>
            </Box>
          </Hidden>

          <Box pr={3}>
            <MenuIcon />
          </Box>
        </Box>

        

        <Box
          display='flex'
          justifyContent='center'
          pt={4}
        >
          <Box minHeight='100vh' width='100vw' maxWidth={1000}>
            <Grid container>

              <Grid item xs={12} md={7} >
                
                <Box mt={6}
                  height={'70vh'}
                >
                  <Box>
                    <Box
                      className='fontBebas'
                      padding={1} fontSize={30}
                      color={Theme.palette.env.light}
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
                              borderRadius={2}
                              bgcolor={valueInit === item.id ? 'hsla(30,0%,100%,.3)' : undefined}
                              padding={1} mr={1} fontWeight={600}
                              key={index} className='fontMontserrat' 
                              onClick={() => setValueInit(item.id)}
                              style={{ cursor: 'pointer' }} 
                              color={Theme.palette.primary.main}
                            >
                              {item.title}
                            </Box>
                          ))
                      }

                    </Box>

                    <Box>
                      {
                        valueInit === 'duxui' ? <DUXUI setTrigger={setTrigger} trigger={trigger} /> :
                          valueInit === 'dgraph' ? <DGraph setTrigger={setTrigger} trigger={trigger} /> :
                            valueInit === 'dweb' ? <DWeb setTrigger={setTrigger} trigger={trigger} /> :
                              undefined
                      }
                    </Box>

                  </Box>
                </Box>
                

              </Grid>

              <Grid item xs={12} md={5} >
                <Box paddingTop={10} height={'100vh'}
                >
                  <IndexGraph/>
                </Box>
              </Grid>

            </Grid>
          </Box>



        </Box>

        <Box
          
        >

          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            {
              [1,2,3,4,5].map((item,index)=>(
                  <Box 
                    bgcolor={'hsla(0,0%,100%,.2)'}
                    width={200} height={200}
                    borderRadius={3}
                    margin={1}
                  >


                  </Box>
              ))
            }
                      
          </Box>
        </Box>

        
        <Box
          height={400}
          className='shadow'
        >
          Footer
        </Box>

        
      </Box>

    </Box>
  )
}

export default App
