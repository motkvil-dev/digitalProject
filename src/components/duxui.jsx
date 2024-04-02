import { Box, Grid } from "@mui/material"
import gsap from "gsap"
import { useEffect } from "react"

const DUXUI = (props) => {

    useEffect(()=>{
        gsap.to('.item',{
            width:'100%'
        })
    },[])

    return(
        <Box>
            <Box
                className='fontGlass'
                padding={1} fontSize={50}
            >
                Diseño UX/UI
            </Box>

            <Box
                padding={1}
                className='fontMontserrat'
            >
                Nuestro servicio de diseño UX/UI se centra en crear 
                experiencias digitales atractivas y fáciles de usar. 
                Desde interfaces intuitivas hasta diseños visualmente 
                impactantes, fusionamos la estética con la 
                funcionalidad para que tu producto destaque y cautive 
                a tus usuarios desde el primer momento.
            </Box>

            {/**OPT */}
            <Box
                padding={1}
            >
                <Grid container spacing={1}>
                    {
                        [
                            {title:'Paquete Basico'},
                            {title:'Paquete Èstandar'},
                            {title:'Paquete Premium'}
                        ].map((item,index)=>(
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    border={2}
                                    borderColor={props.color?props.color:'hsla(0,100%,50%,.7)'}
                                    borderRadius={1} padding={1} className='item'
                                >
                                    <Box
                                        className='fontBebas'
                                        textAlign={'center'}
                                        fontSize={30} color={'white'}
                                        
                                    >
                                        {item.title}
                                    </Box>

                                    <Box display={'flex'} justifyContent={'center'}>
                                        <Box bgcolor={'hsla(0,100%,50%,.7)'} width={150} height={150} borderRadius={'50%'} />
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