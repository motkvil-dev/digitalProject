import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Box, Grid, Hidden } from '@mui/material'
import '../App.css'
import Theme from '../assets/themeConfig'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



const ServicesComp = (props) => {

 return (
  <Box
    display={'flex'}
    justifyContent={'center'}

  >
    <Box maxWidth={1200}>
      <Grid container>

       <Grid item xs={12}>
        <Box
         display={'flex'}
         justifyContent={'center'}
         minHeight={'100vh'} p={2} pt={10} pb={10}
         alignItems={'center'}
        >
         <Grid container>
           <Grid item xs={12} md={6}>
            <Box padding={2} pt={9} 
             className='fontMontserrat' 
             color={Theme.palette.env.dark} 
             fontWeight={500}
             ref={props.duxuiRef}
            >
              <Box mb={3} color={Theme.palette.primary.light}><h1 >Diseño UX/UI</h1></Box>
              
              Nuestro servicio de diseño UX/UI ofrece soluciones centradas en el 
              usuario para garantizar experiencias digitales excepcionales. Desde 
              el diseño de interfaces intuitivas y atractivas hasta la investigación 
              profunda de usuarios, nos enfocamos en crear productos que no solo se 
              vean impresionantes, sino que también sean fáciles de usar y cumplan 
              con los objetivos comerciales. Con prototipos interactivos y pruebas 
              de usabilidad, aseguramos que cada detalle esté optimizado para 
              maximizar la satisfacción del usuario. Confía en nuestro equipo para 
              convertir tus ideas en experiencias digitales que cautiven y retengan
              a tu audiencia.
            </Box>

            <Box
             bgcolor={Theme.palette.primary.main}
             color={Theme.palette.env.light}
             padding={1} maxWidth={200}
             borderRadius={2} className='fontExo2'
             fontWeight={500}
             fontSize={20}
             textAlign={'center'}
            >
             Solicitar Servicio
            </Box>

           </Grid>

           <Grid item xs={12} md={6}>
             <Box 
               display={'flex'}
               justifyContent={'center'}

             >
               <Box bgcolor={'hsla(0,0%,100%,.2)'} padding={2} borderRadius={2} margin={'30px 4px'}>

                 <TableContainer  >
                   <Table aria-label="service packages table">
                     <TableHead >
                       <TableRow >
                         <TableCell style={{color:'white'}}>Características</TableCell>
                         <TableCell style={{color:'white'}} align="center">Paquete Básico</TableCell>
                         <TableCell style={{color:'white'}} align="center">Paquete Estándar</TableCell>
                         <TableCell style={{color:'white'}} align="center">Paquete Premium</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Diseño de Interfaces</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Investigación de Usuarios</TableCell>
                         <TableCell style={{color:'white'}} align="center">✕</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Prototipado Interactivo</TableCell>
                         <TableCell style={{color:'white'}} align="center">✕</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Precios</TableCell>
                         <TableCell style={{color:'white'}} align="center">30$</TableCell>
                         <TableCell style={{color:'white'}} align="center">120$</TableCell>
                         <TableCell style={{color:'white'}} align="center">350$</TableCell>
                       </TableRow>
                       {/* Agrega las filas restantes aquí */}
                     </TableBody>
                   </Table>
                 </TableContainer>
               </Box>
             </Box>
           </Grid>
         </Grid>
        </Box>
       </Grid>
        
       <Grid item xs={12}>
        <Box
         display={'flex'}
         justifyContent={'center'}
         minHeight={'100vh'}
         alignItems={'center'}
         p={2} pt={10} pb={10}
         
        >
         <Grid container>

          <Grid item xs={12} md={6}>
           <Box 
            padding={2} pt={9} 
            className='fontMontserrat' 
            color={Theme.palette.env.dark} 
            fontWeight={500}
            ref={props.dgraphRef}
          >
             <Box mb={3} color={Theme.palette.primary.light}><h1 >Diseño Gráfico</h1></Box>
             
             Nuestro servicio de diseño gráfico ofrece soluciones creativas 
             y profesionales para potenciar tu marca y comunicar tu mensaje 
             de manera efectiva. Desde el diseño de logotipos distintivos 
             hasta la creación de material de marketing impactante como 
             flyers y tarjetas de visita, nuestro equipo experto se encarga 
             de cada detalle. Además, creamos banners publicitarios 
             atractivos y contenido visual para redes sociales que resalta 
             tu presencia en línea. Para aquellos que buscan algo único, 
             también ofrecemos ilustraciones personalizadas que agregan un 
             toque especial a tu marca. Confía en nosotros para elevar tu 
             imagen de marca y destacarte en un mercado competitivo.
           </Box>

           <Box
            bgcolor={Theme.palette.primary.main}
            color={Theme.palette.env.light}
            padding={1} maxWidth={200}
            borderRadius={2} className='fontExo2'
            fontWeight={500}
            fontSize={20}
            textAlign={'center'}
           >
            Solicitar Servicio
           </Box>

           </Grid>
           
           <Grid item xs={12} md={6}>
             <Box 
               display={'flex'}
               justifyContent={'center'}
             >

               <Box bgcolor={'hsla(0,0%,100%,.2)'} padding={2} borderRadius={2} margin={'30px 4px'}>
                 
                 <TableContainer>
                   <Table aria-label="graphic design packages table">
                     <TableHead>
                       <TableRow>
                         <TableCell style={{color:'white'}}>Características</TableCell>
                         <TableCell style={{color:'white'}} align="center">Básico</TableCell>
                         <TableCell style={{color:'white'}} align="center">Estándar</TableCell>
                         <TableCell style={{color:'white'}} align="center">Premium</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Diseño de Logotipos</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Material de Marketing (Flyers, Tarjetas de Visita, etc.)</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Diseño de Banners Publicitarios</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Diseño de Material para Redes Sociales</TableCell>
                         <TableCell style={{color:'white'}} align="center">✕</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                         <TableCell style={{color:'white'}} component="th" scope="row">Ilustraciones Personalizadas</TableCell>
                         <TableCell style={{color:'white'}} align="center">✕</TableCell>
                         <TableCell style={{color:'white'}} align="center">✕</TableCell>
                         <TableCell style={{color:'white'}} align="center">✓</TableCell>
                       </TableRow>
                       <TableRow>
                        <TableCell style={{color:'white'}} component="th" scope="row">Precios</TableCell>
                        <TableCell style={{color:'white'}} align="center">30$</TableCell>
                        <TableCell style={{color:'white'}} align="center">120$</TableCell>
                        <TableCell style={{color:'white'}} align="center">350$</TableCell>
                      </TableRow>
                       {/* Agrega las filas restantes aquí */}
                     </TableBody>
                   </Table>
                 </TableContainer>

               </Box>
             </Box>
           </Grid> 
         </Grid>
        </Box>
       </Grid>

       <Grid item xs={12}>
        <Box
         display={'flex'}
         justifyContent={'center'}
         minHeight={'100vh'}
         alignItems={'center'}
         p={2} pt={10} pb={10}
         ref={props.dwebRef}
        >
         <Grid container>
          <Grid item xs={12} md={6}>
           <Box 
            padding={2} pt={9} 
            className='fontMontserrat' 
            color={Theme.palette.env.dark} 
            fontWeight={500}
            ref={props.dwebRef}
          >
             <Box mb={3} color={Theme.palette.primary.light}><h1 >Diseño Web</h1></Box>
             
             Nuestro servicio de diseño web ofrece soluciones personalizadas 
             para tu negocio en línea. Desde un diseño adaptable y funcional 
             hasta la integración de redes sociales y formularios de contacto, 
             nos aseguramos de que tu sitio web sea atractivo y efectivo. Con 
             opciones para galerías de imágenes, blogs y optimización SEO, te 
             ayudamos a destacarte en línea y atraer a tu audiencia. Además, 
             ofrecemos soporte técnico confiable para garantizar un 
             funcionamiento sin problemas. Confía en nosotros para crear un 
             sitio web que impulse tu presencia en línea y logre tus objetivos 
             comerciales.
           </Box>

           <Box
            bgcolor={Theme.palette.primary.main}
            color={Theme.palette.env.light}
            padding={1} maxWidth={200}
            borderRadius={2} className='fontExo2'
            fontWeight={500}
            fontSize={20}
            textAlign={'center'}
           >
            Solicitar Servicio
           </Box>

          </Grid>

          <Grid item xs={12} md={6}>
            <Box 
              display={'flex'}
              justifyContent={'center'}

            >
              <Box bgcolor={'hsla(0,0%,100%,.2)'} padding={2} borderRadius={2} margin={'30px 4px'}>

                <TableContainer  >
                  <Table aria-label="service packages table">
                    <TableHead >
                      <TableRow >
                        <TableCell style={{color:'white'}}>Características</TableCell>
                        <TableCell style={{color:'white'}} align="center">Paquete Básico</TableCell>
                        <TableCell style={{color:'white'}} align="center">Paquete Estándar</TableCell>
                        <TableCell style={{color:'white'}} align="center">Paquete Premium</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{color:'white'}} component="th" scope="row">Diseño de Interfaces</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{color:'white'}} component="th" scope="row">Investigación de Usuarios</TableCell>
                        <TableCell style={{color:'white'}} align="center">✕</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{color:'white'}} component="th" scope="row">Prototipado Interactivo</TableCell>
                        <TableCell style={{color:'white'}} align="center">✕</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                        <TableCell style={{color:'white'}} align="center">✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{color:'white'}} component="th" scope="row">Precios</TableCell>
                        <TableCell style={{color:'white'}} align="center">30$</TableCell>
                        <TableCell style={{color:'white'}} align="center">120$</TableCell>
                        <TableCell style={{color:'white'}} align="center">350$</TableCell>
                      </TableRow>
                      {/* Agrega las filas restantes aquí */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Grid>
         </Grid>

        </Box>
       </Grid>

      </Grid>
    </Box>
  </Box>
 )
}

export default ServicesComp