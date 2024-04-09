import {Box, Grid} from '@mui/material'
const Footer = () => {


 return (
  <Box
   padding={2}
   borderTop={2}
   borderColor={'hsla(0,0%,100%,.2)'}
  >
   <Grid container>
    {
     [
      {
       title: 'Servicios',
       xs:12, sm:4, md: 3,
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
       title: 'Diseño Grafico',
       xs:12, sm:4, md: 3,
       items:[
        {
         title: 'Diseño de Logotipos',
         link: ''
        },
        {
         title: 'Material de Marketing (Flyers, Tarjetas de Visita, etc.)',
         link: ''
        },
        {
         title: 'Diseño de Banners Publicitarios',
         link: ''
        },
        {
         title: 'Diseño de Material para Redes Sociales',
         link: ''
        },
        {
         title: 'Ilustraciones Personalizadas',
         link: ''
        },
       ]
      },
      {
       title: 'Diseño Web',
       xs:12, sm:4, md: 3,
       items:[
        {
         title: 'Diseño Responsivo',
         link: ''
        },
        {
         title: 'Número de Páginas	',
         link: ''
        },
        {
         title: 'Integración de Redes Sociales',
         link: ''
        },
        {
         title: 'Galería de Imágenes',
         link: ''
        },
        {
         title: 'Blog',
         link: ''
        },
        {
         title: 'Optimización SEO',
         link: ''
        },
        {
         title: 'Estadísticas de Visitantes',
         link: ''
        },
        {
         title: 'Soporte Técnico',
         link: ''
        },
        
       ]
      },
      {
       title: 'Diseño UX/UI',
       xs:12, sm:4, md: 3,
       items:[
        {
         title: 'Diseño de Interfaces',
         link: ''
        },
        {
         title: 'Investigación de Usuarios',
         link: ''
        },
        {
         title: 'Prototipado Interactivo',
         link: ''
        },
       ]
      },
      {
       title: 'Contactanos',
       xs:12, sm:12, md:12,
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
      }
     ].map((item,index)=>(
      
      <Grid item xs={item.xs} sm={item.sm} md={item.md} key={index}>
       <Box
        textAlign='center'
        className='fontExo2'
        fontSize={18} padding={1}
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
          borderColor={'hsla(0,0%,100%,.2)'}
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