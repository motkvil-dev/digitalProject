import {Box, Grid, Hidden} from '@mui/material'
import Theme from './themeConfig'
import DUXUI from '../components/duxui'
import DGraph from '../components/dgraph'
import DWeb from '../components/dWeb'
import IndexGraph from './indexGraph'
import { Canvas } from '@react-three/fiber'
import PhoneModel from './models/phoneModel'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'



export default function HeaderComp(props) {
 

 return (


  <Box
    display='flex'
    justifyContent='center'
    pt={4}ref={props.init}
    minHeight={1000}
  >
    <Box width='100vw' maxWidth={1200}>
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
                        bgcolor={props.valueInit === item.id ? Theme.palette.secondary.dark : undefined}
                        padding={1} mr={1} fontWeight={600}
                        key={index} className='fontMontserrat'
                        onClick={() => props.setValueInit(item.id)}
                        style={{ cursor: 'pointer' }} 
                        color={props.valueInit === item.id ? 'white' : Theme.palette.secondary.dark}
                      >
                        {item.title}
                      </Box>
                    ))
                }

              </Box>

              <Box minHeight={'80vh'} pb={10} display={'flex'} alignItems={'center'}>
                {
                  props.valueInit === 'duxui' ? <DUXUI duxuiRef={props.duxuiRef} setTrigger={props.setTrigger} trigger={props.trigger} /> :
                  props.valueInit === 'dgraph' ? <DGraph dgraphRef={props.dgraphRef} setTrigger={props.setTrigger} trigger={props.trigger} /> :
                  props.valueInit === 'dweb' ? <DWeb dwebRef={props.dwebRef} setTrigger={props.setTrigger} trigger={props.trigger} /> :
                  undefined
                }
              </Box>

            </Box>
          </Box>
        </Grid>
        
        <Hidden mdDown>
          <Grid item xs={12} md={5} >
            <Box paddingTop={18} height={'90vh'}
            >
              <Canvas>
                <ambientLight intensity={.3} />
                <hemisphereLight color={'white'} groundColor={Theme.palette.primary.main} />
                <directionalLight position={[3,3,3]} color={Theme.palette.primary.main} intensity={5}/>

                <directionalLight position={[-3,3,3]} color={Theme.palette.secondary.light} intensity={12}/>
                <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} position={[5,5,5]} />
                <OrbitControls/>

                <PhoneModel open={props.open} setOpen={props.setOpen} />
              </Canvas>
            </Box>
          </Grid>
        </Hidden>

      </Grid>
    </Box>
  </Box>
 )
}