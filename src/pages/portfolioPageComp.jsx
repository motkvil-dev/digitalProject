import { Box } from "@mui/material";
import Theme from "../assets/themeConfig";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "../assets/models/laptopModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useEffect } from "react";

export default function PortfolioPageComp(props) {


 useEffect(()=>{

  gsap.fromTo('.item', {
   x:30,
   opacity:0
  },{
   x:0,
   opacity:1,
   delay:.3,
   duration:.5,
   stagger:.2
  })
 },[])


 return (

  <Box 
    position={'absolute'}
    top={0} left={0}
    display={'flex'}
    justifyContent={'center'}
    width={'100%'}
    minHeight={'100vh'}
    overflow={'auto'}
    padding={2}
    paddingTop={20}
    marginBottom={20}
  >

   <Box
    width={'100%'}
    maxWidth={1400}
   >


    <Box 
     className='fontMontserrat item'
     fontSize={40}
     fontWeight={800}
     color={Theme.palette.primary.dark}
    >
     Portafolio
    </Box>


    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
    Nuestro trabajo
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
    >
     En Motk Design, nos enorgullece presentar una selección de nuestros proyectos 
     más destacados. Cada uno de estos casos representa un desafío único que 
     enfrentamos con creatividad, dedicación y experiencia para entregar resultados 
     excepcionales a nuestros clientes.
    </Box>

    <Box
     padding={1}
     display={'flex'}
     justifyContent={'center'}
     flexWrap={'wrap'}
     marginTop={3}
     marginBottom={10}
    >

     {
      [<LaptopModel/>,<LaptopModel/>,<LaptopModel/>].map((item,index)=>(

       <Box
        key={index}
        width={300}
        height={300}
        margin={1}
        borderRadius={'50%'}
        className='shadow helloBlur item'
       >

        <Canvas>
         <ambientLight intensity={.3} />
         <hemisphereLight color={'white'} groundColor={Theme.palette.primary.main} />
         <directionalLight position={[3,3,3]} color={Theme.palette.primary.main} intensity={5}/>
         <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} position={[4,0,4.5]}/>
         
          {item}
         
         <OrbitControls/>
        </Canvas>

       </Box>
      ))
     }

    </Box>

   </Box>

  </Box>
 )
}