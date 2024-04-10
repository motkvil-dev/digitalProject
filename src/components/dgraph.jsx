import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"

const DUXUI = (props) => {

    const [packItem, setPackItem] = useState()


    const scrollToMyElement = () => {

        props.setTrigger(!props.trigger)
        props.dgraphRef.current.scrollIntoView({behavior:'smooth'})

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



    

    return(
        <Box padding={1}
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
                    Diseño Gráfico
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
                        Nuestro servicio de diseño gráfico ofrece soluciones 
                        visuales creativas y profesionales para destacar tu 
                        marca. Desde la creación de logotipos y material de 
                        marketing hasta el diseño de banners y contenido para 
                        redes sociales, nuestro equipo experto combina la 
                        estética con la estrategia para transmitir tu mensaje 
                        de manera efectiva y cautivadora. 
                    </Box>
                    <Box
                    padding={2}
                    className='fontMontserrat blur shadow'
                    fontSize={16} fontWeight={500}
                    color={'hsla(0,0%,30%,.7)'}
                    bgcolor='hsla(30,0%,100%,.5)'
                    borderRadius={'10px'}
                    >
                        Con atención al 
                        detalle y creatividad sin límites, transformamos tus 
                        ideas en diseños impactantes que conectan con tu 
                        audiencia y refuerzan la identidad de tu marca.
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