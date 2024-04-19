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
        <Box padding={1}
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
                    fontSize={20} fontWeight={600}
                    color={'hsla(0,0%,30%,.7)'}
                    borderRadius={'10px'}
                    maxWidth={700}
                >
                    
                        Nuestro servicio de diseño UX/UI se centra en crear
                        experiencias digitales atractivas y fáciles de usar.
                        <br/><br/>
                        Desde interfaces intuitivas hasta diseños visualmente
                        impactantes, fusionamos la estética con la
                        funcionalidad para que tu producto destaque y cautive
                        a tus usuarios desde el primer momento.
                    
                </Box>
            </Box>

            <Box
                maxWidth={200} padding={2}
                borderRadius={8} margin={1}
                bgcolor={Theme.palette.secondary.dark}
                className='fontExo2 shadow' fontSize={18} fontWeight={500}
                onClick={()=>scrollToMyElement(undefined, props.duxuiRef)} style={{cursor:'pointer'}}
            >
                Detalles del servicio
            </Box>

            
        </Box>
    )

}

export default DUXUI