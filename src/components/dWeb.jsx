import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"

const DUXUI = (props) => {

 const [packItem, setPackItem] = useState()


 useEffect(()=>{
    gsap.fromTo('.serviceAnimation',{
        y:'50px',
        opacity:0,
    },{
        y:'0px',
        opacity:1,
        duration:.5, 
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
                    className='fontExo2' fontWeight={600}
                    padding={1} fontSize={50} color={Theme.palette.primary.main}
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
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.1)'
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
                    comerciales. Con atención al detalle y enfoque en la 
                    usabilidad, creamos experiencias digitales que destacan en 
                    un mercado en constante evolución y garantizan una conexión 
                    duradera con tus usuarios.
                </Box>
            </Box>

            <Box
                maxWidth={200} padding={1}
                borderRadius={1} margin={1}
                bgcolor={Theme.palette.primary.dark}
                onClick={() => props.setTrigger(!props.trigger)}
                className='fontMontserrat' fontSize={18} fontWeight={500}
            >
                Detalles del servicio
            </Box>

            
        </Box>
 )

}

export default DUXUI