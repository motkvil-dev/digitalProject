import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"
import scrollToMyElement from "../assets/scrollToMyElement"

const DUXUI = (props) => {

 const [packItem, setPackItem] = useState()



 useEffect(()=>{
    gsap.fromTo('.serviceAnimation',{
        y:'50px',
        opacity:0,
    },{
        y:'0px',
        opacity:1,
        duration:1, 
    })
})


 return (
    <Box 
        padding={1}
        className='serviceAnimation'
        style={{opacity:0}} 
    >

            <Box
                bgcolor={'none'}
                borderRadius={2} padding={1}
            >
                <Box
                    className='fontMontserrat' fontWeight={800}
                    padding={1} pb={3} fontSize={50} color={Theme.palette.env.dark}
                >
                    Diseño Web
                </Box>
                {
                    packItem ?
                        <Box>
                            {packItem}
                        </Box>
                        : undefined
                }

                <Box
                    padding={2}
                    className='fontMontserrat blur'
                    fontSize={20} fontWeight={600}
                    color={'hsla(0,0%,30%,.7)'}
                    borderRadius={'10px'}
                    maxWidth={700}
                >
                    
                    Nuestro servicio de diseño web ofrece soluciones personalizadas 
                    para crear sitios web modernos y funcionales que cautivan a tu 
                    audiencia desde el primer clic. Desde el diseño de interfaces 
                    elegantes hasta la optimización de la experiencia del usuario, 
                    nuestro equipo experto fusiona la creatividad con la 
                    funcionalidad para ofrecerte un sitio web que no solo se ve 
                    impresionante, sino que también cumple con tus objetivos 
                    comerciales. 
                
                    <br/><br/>
                    Con atención al detalle y enfoque en la 
                    usabilidad, creamos experiencias digitales que destacan en 
                    un mercado en constante evolución y garantizan una conexión 
                    duradera con tus usuarios.
                    
                </Box>
            </Box>

            <Box
                maxWidth={200} padding={2}
                borderRadius={8} margin={1}
                bgcolor={Theme.palette.secondary.dark}
                className='fontExo2 shadow' fontSize={18} fontWeight={500}
                onClick={()=>scrollToMyElement(undefined, props.dwebRef)} style={{cursor:'pointer'}}
            >
                Detalles del servicio
            </Box>

            
        </Box>
 )

}

export default DUXUI