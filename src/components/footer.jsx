import {Box, Grid} from '@mui/material'
import Theme from '../assets/themeConfig'
const Footer = () => {


 return (
  <Box
   padding={2}
   borderTop={2}
   borderColor={'hsla(0,0%,100%,.2)'}
   bgcolor={'hsla(0,0%,100%,.5)'}
   className='helloBlur'
  >
   <Grid container>
    {
     [
      {
       title: 'Servicios',
       xs:12, sm:4, md: 4,
       items:[
        {
         title: 'Diseño Grafico',
         link: ''
        },
        {
         title: 'Diseño UX/UI',
         link: ''
        },
        {
         title: 'Diseño Web',
         link: ''
        }
       ]
      },
      {
       title: 'Contactanos',
       xs:12, sm:4, md:4,
       items:[
        {
         title: '+34 658 305 073',
         link: ''
        },
        {
         title: 'motkdesign@gmail.com',
         link: ''
        },
        {
         title: '@motk-design',
         link: ''
        },
       ]
      },
      {
       title: 'Enlaces útiles',
       xs:12, sm:4, md:4,
       items:[
        {
         title: 'Aviso Legal',
         link: ''
        },
        {
         title: 'Política de Privacidad',
         link: ''
        },
        {
         title: 'Términos de Uso',
         link: ''
        },
       ]
      },
      {
       title: 'Ubicación',
       xs:12, sm:4, md:4,
       items:[
        {
         title: 'Dirección: Calle Ejemplo, 1234',
         link: ''
        },
        {
         title: 'Barcelona, España',
         link: ''
        }
       ]
      },
      {
       title: 'Newsletter',
       xs:12, sm:4, md:4,
       items:[
        {
         title: 'Suscríbete a nuestro newsletter para recibir las últimas actualizaciones y ofertas especiales.',
         link: ''
        }
       ]
      },
      {
       title: 'Siguenos',
       xs:12, sm:4, md:4,
       items:[
        {
         title: 'Facebook',
         link: ''
        },
        {
         title: 'Instagram',
         link: ''
        },
        {
         title: 'X-Twitter',
         link: ''
        }
       ]
      }
     ].map((item,index)=>(
      
      <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
       <Box
        textAlign='center'
        className='fontExo2'
        fontSize={18} padding={1}
        color={Theme.palette.env.dark}
       >
        <Box padding={2}>
         {item.title}
        </Box>

        {item.items.map((item, index)=>(
         <Box 
          key={index} 
          textAlign='center'
          className='fontExo2'
          fontSize={14}
          padding={1}
          borderTop={2}
          borderColor={'hsla(0,0%,50%,.2)'}
         >
          {item.title}
         </Box>
        ))}
       </Box>
      </Grid>
     ))
    }
   </Grid>
  </Box>
 )
}

export default Footer