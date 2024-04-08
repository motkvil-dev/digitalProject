import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect, useState } from "react"
import Theme from "../assets/themeConfig"

const DUXUI = (props) => {

    const [packItem, setPackItem] = useState()

    const scrollToMyElement = () => {

        props.setTrigger(!props.trigger)
        props.duxuiRef.current.scrollIntoView({behavior:'smooth'})

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
        <Box padding={1}
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
                    Diseño UX/UI
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
                    Nuestro servicio de diseño UX/UI se centra en crear
                    experiencias digitales atractivas y fáciles de usar.
                    Desde interfaces intuitivas hasta diseños visualmente
                    impactantes, fusionamos la estética con la
                    funcionalidad para que tu producto destaque y cautive
                    a tus usuarios desde el primer momento.
                </Box>
            </Box>

            <Box
                maxWidth={200} padding={1}
                borderRadius={1} margin={1}
                bgcolor={Theme.palette.primary.dark}
                onClick={() => scrollToMyElement()}
                className='fontMontserrat' fontSize={18} fontWeight={500}
            >
                Detalles del servicio
            </Box>

            
        </Box>
    )

}

export default DUXUI