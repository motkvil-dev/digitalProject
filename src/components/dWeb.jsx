import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"

const DUXUI = (props) => {

 const [packItem, setPackItem] = useState()

 const scrollToMyElement = () => {

    props.setTrigger(!props.trigger)
    props.dwebRef.current.scrollIntoView({behavior:'smooth'})

}


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
                    className='fontMontserrat' fontWeight={200}
                    padding={1} pb={3} fontSize={40} color={'white'}
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
                    padding={3}
                    className='fontMontserrat blur shadow'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    borderRadius={'10px'}
                    maxWidth={700}
                >
                    <Box
                    padding={2}
                    className='fontMontserrat blur shadow'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.5)'
                    borderRadius={'10px'}
                    mb={1}
                    >
                        Nuestro servicio de diseño web ofrece soluciones personalizadas 
                        para crear sitios web modernos y funcionales que cautivan a tu 
                        audiencia desde el primer clic. Desde el diseño de interfaces 
                        elegantes hasta la optimización de la experiencia del usuario, 
                        nuestro equipo experto fusiona la creatividad con la 
                        funcionalidad para ofrecerte un sitio web que no solo se ve 
                        impresionante, sino que también cumple con tus objetivos 
                        comerciales. 
                    </Box>
                    <Box
                    padding={2}
                    className='fontMontserrat blur shadow'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.5)'
                    borderRadius={'10px'}
                    >
                        Con atención al detalle y enfoque en la 
                        usabilidad, creamos experiencias digitales que destacan en 
                        un mercado en constante evolución y garantizan una conexión 
                        duradera con tus usuarios.
                    </Box>
                </Box>
            </Box>

            <Box
                maxWidth={200} padding={2}
                borderRadius={3} margin={1}
                bgcolor={Theme.palette.secondary.dark}
                className='fontExo2 shadow' fontSize={18} fontWeight={500}
                onClick={()=>scrollToMyElement()} style={{cursor:'pointer'}}
            >
                Detalles del servicio
            </Box>

            
        </Box>
 )

}

export default DUXUI