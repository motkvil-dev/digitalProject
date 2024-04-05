import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"

const DUXUI = (props) => {

    const [packItem, setPackItem] = useState()
    

    useEffect(()=>{
        gsap.to('.item',{
            width:'100%'
        })
    },[])

    return(
        <Box padding={1}>

            <Box
                bgcolor={'none'}
                borderRadius={2} padding={1}
            >
                <Box
                    className='fontExo2' fontWeight={600}
                    padding={1} fontSize={50} color={Theme.palette.primary.main}
                >
                    Diseño Gráfico
                </Box>
                {
                    packItem?
                        <Box>
                            {packItem}
                        </Box>
                    :undefined
                }

                <Box
                    padding={1}
                    className='fontMontserrat' 
                    fontSize={18} fontWeight={400}
                    color={Theme.palette.env.light}
                >
                    Nuestro servicio de diseño gráfico ofrece soluciones 
                    visuales creativas y profesionales para destacar tu 
                    marca. Desde la creación de logotipos y material de 
                    marketing hasta el diseño de banners y contenido para 
                    redes sociales, nuestro equipo experto combina la 
                    estética con la estrategia para transmitir tu mensaje 
                    de manera efectiva y cautivadora. Con atención al 
                    detalle y creatividad sin límites, transformamos tus 
                    ideas en diseños impactantes que conectan con tu 
                    audiencia y refuerzan la identidad de tu marca.
                </Box>
            </Box>

            <Box 
                maxWidth={200} padding={1} 
                borderRadius={1} margin={1}
                bgcolor={Theme.palette.primary.main}  
                onClick={()=>props.setTrigger(!props.trigger)} 
                className='fontMontserrat' fontSize={18} fontWeight={500}
            >
                Detalles del servicio
            </Box>

            {/**OPT */}
            <Box
                padding={1}
            >
                <Grid container spacing={1}>
                    {
                        [
                            {title:'Paquete Basico', id:'pb'},
                            {title:'Paquete Èstandar',id:'pe'},
                            {title:'Paquete Premium',id:'pp'}
                        ].map((item,index)=>(
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    bgcolor={Theme.palette.env.light}
                                    borderRadius={2} padding={1} className='item'
                                >
                                    <Box
                                        className='fontBebas'
                                        textAlign={'center'}
                                        fontSize={30} color={Theme.palette.primary.main}
                                        
                                    >
                                        {item.title}
                                    </Box>

                                    <Box>
                                        <Box
                                            className='fontBebas'
                                            fontSize={30}
                                            textAlign={'center'}
                                        >
                                            30.00 €
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )

}

export default DUXUI