import { Box } from "@mui/material";
import Theme from "../assets/themeConfig";
import Footer from "../components/footer";
import gsap from "gsap";
import { useEffect } from "react";


export default function UsPageComp(props){


 useEffect(()=>{

  gsap.fromTo('.item', {
   x:30,
   opacity:0
  },{
   x:0,
   opacity:1,
   delay:1,
   duration:.5,
   stagger:.2
  })
 },[])

 return(
  <Box 
    position={'absolute'}
    top={0} left={0}
    display={'flex'}
    justifyContent={'center'}
    width={'100vw'}
    height={'100vh'}
    overflow={'auto'}
    padding={2}
    paddingTop={20}
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
     Nosotros
    </Box>


    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
    Quiénes Somos
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     En Motk Ddesign, nos enorgullecemos de ser una agencia creativa líder en el sector, 
     especializada en el diseño web, diseño gráfico y diseño de experiencia de usuario 
     (UX/UI). Con una pasión compartida por la innovación y la excelencia, nuestro equipo 
     está comprometido con la creación de soluciones digitales que no solo cumplen, sino 
     que superan las expectativas de nuestros clientes.
    </Box>




    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Nuestra Misión
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     Nuestra misión es simple: transformar ideas en realidades digitales impactantes. 
     Creemos en la fuerza del diseño para inspirar, motivar y conectar, y trabajamos 
     incansablemente para ofrecer resultados que no solo se vean bien, sino que también 
     funcionen de manera efectiva.
    </Box>



    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Nuestra Filosofía
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     En el corazón de nuestro enfoque está el compromiso con la excelencia 
     y la satisfacción del cliente. Creemos en la importancia de entender 
     las necesidades únicas de cada cliente y en colaborar estrechamente con 
     ellos para crear soluciones a medida que impulsen su éxito. Nos 
     esforzamos por superar las expectativas en cada proyecto, buscando siempre 
     la perfección en cada detalle.
    </Box>



    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Nuestro Equipo
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     Nuestro equipo está formado por una mezcla diversa de talentos 
     creativos, desde diseñadores web y gráficos hasta expertos en 
     experiencia de usuario. Cada miembro de nuestro equipo aporta 
     su experiencia única y su pasión por el diseño, lo que nos 
     permite ofrecer soluciones innovadoras y de alta calidad a 
     nuestros clientes.
    </Box>


    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Nuestros Valores
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     En Motk Design, nos guiamos por una serie de valores fundamentales que reflejan quiénes somos y cómo trabajamos:
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     <Box padding={2} display={'flex'}>
      <Box padding={1}>◉</Box> 
       <Box>
        <strong>Creatividad:</strong> Buscamos constantemente nuevas 
        formas de innovar y sorprender a nuestros clientes con ideas frescas y originales.
       </Box> 
     </Box>

     <Box padding={2} display={'flex'}>
      <Box padding={1}>◉</Box>
      <Box>
       <strong>Calidad:</strong> Nos comprometemos a ofrecer productos y servicios de la más alta calidad, sin compromisos en cuanto a excelencia.
      </Box>
     </Box>

     <Box padding={2} display={'flex'}>
      <Box padding={1}>◉</Box>
      <Box>
       <strong>Colaboración:</strong> Creemos en el poder de trabajar juntos, tanto con nuestros clientes como dentro de nuestro equipo, para lograr resultados extraordinarios.
      </Box>
     </Box>

     <Box padding={2} display={'flex'}>
      <Box padding={1}>◉</Box>
      <Box>
       <strong>Integridad:</strong> Nos comprometemos a actuar con honestidad y transparencia en todas nuestras interacciones, manteniendo siempre la confianza de nuestros clientes.
      </Box>
     </Box>
    </Box>

    
    <Box
     fontSize={30}
     fontWeight={800}
     className='fontMontserrat item'
     color={Theme.palette.primary.dark}
     marginTop={15}
    >
     Nuestros Servicios
    </Box>


    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Diseño Web
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     En el mundo digital de hoy, tu sitio web es la cara de tu negocio en línea. 
     Desde el diseño de sitios web informativos hasta el desarrollo de complejas 
     tiendas en línea, nuestro equipo de diseñadores y desarrolladores trabaja 
     para crear experiencias digitales que cautiven a tu audiencia y impulsen el 
     crecimiento de tu negocio.
    </Box>

    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Diseño Gráfico
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
    >
     El diseño gráfico es una parte fundamental de la identidad visual 
     de tu marca. Desde la creación de logotipos distintivos hasta el 
     diseño de material de marketing impactante, nuestro equipo de 
     diseñadores gráficos se encarga de cada detalle para asegurarse 
     de que tu marca se destaque en un mercado saturado.
    </Box>


    <Box
     fontSize={30}
     fontWeight={600}
     className='fontMontserrat item'
     color={Theme.palette.env.dark}
     marginTop={5}
    >
     Diseño de Experiencia de Usuario (UX/UI)
    </Box>

    <Box
     className='fontMontserrat item'
     fontSize={18}
     fontWeight={500}
     color={Theme.palette.env.dark}
     paddingTop={2}
     maxWidth={900}
     marginBottom={20}
    >
     La experiencia del usuario es un factor crucial para el éxito en línea. 
     Desde la investigación profunda de usuarios hasta el diseño de interfaces 
     intuitivas y atractivas, nuestro equipo de diseño UX/UI se esfuerza por 
     crear productos digitales que no solo sean hermosos, sino también fáciles 
     y agradables de usar.
    </Box>


   <Footer/>

   </Box>

   
    
   
  </Box>
 )
}