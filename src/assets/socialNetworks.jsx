import {Box} from '@mui/material'
import Theme from './themeConfig'


export default function SocialNetComp(props) {
 

 return (
  <Box>

    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      {
        [
          {
            icon:<i className="fa-brands fa-x-twitter"></i>,
            title:'X-Twitter'
          },
          {
            icon:<i className="fa-brands fa-facebook"></i>,
            title:'Facebook'
          },
          {
            icon:<i className="fa-brands fa-instagram"></i>,
            title:'Instagram'
          },
          {
            icon:<i className="fa-brands fa-whatsapp"></i>,
            title:'Whatsapp'
          }
        ].map((item,index)=>(
            <Box key={index} textAlign='center' className='fontExo2'>
              <Box 
                bgcolor={'hsla(0,0%,100%,.2)'}
                className='shadow'
                width={50} height={50}
                borderRadius={3}
                display='flex'
                justifyContent='center'
                alignItems='center'
                margin={1} fontSize={30}
                style={{color:Theme.palette.primary.main}}
              >
                {item.icon}

              </Box>
              <Box color={Theme.palette.primary.main} fontSize={10}>{item.title}</Box>
            </Box>
        ))
      }
                
    </Box>
  </Box>
 )
}