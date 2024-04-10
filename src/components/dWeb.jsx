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
                    className='fontMontserrat' fontWeight={600}
                    padding={1} fontSize={40} color={'white'}
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
                    padding={1}
                    className='fontMontserrat blur'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.1)'
                    borderRadius={'10px'}
                    boxShadow={'5px 5px 0px hsla(0,0%,0%,.3)'}
                    maxWidth={700}
                >
                    <Box
                    padding={2}
                    className='fontMontserrat blur'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.8)'
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
                    className='fontMontserrat blur'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.8)'
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
                border={3} borderColor={'hsla(0,0%,0%,.2)'}
                borderRadius={3} margin={1}
                bgcolor={Theme.palette.secondary.dark}
                className='fontMontserrat shadow' fontSize={18} fontWeight={800}
                onClick={()=>scrollToMyElement()}
            >
                Detalles del servicio
            </Box>

            
        </Box>
 )

}

export default DUXUI