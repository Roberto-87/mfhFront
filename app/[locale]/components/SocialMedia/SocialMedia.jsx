'use client'
import { Box } from "@mui/material"
import Link from 'next/link'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
 
const SocialMedia=()=>{
    return(
        
        <Box sx={{ display:'flex',justifyContent:'space-around', alignItems:'center'}}>
   
        <Link href={'https://www.instagram.com/mfhardoy'} target='_blank' >
        <FiInstagram style={{marginLeft:'4px',backgroundColor:'#746d6d ', color: 'white ',cursor:'pointer', width:'25px', height:'25px', padding:'6px', borderRadius:'50%', fontSize:'1.5em' }}  />
        </Link>
        <Link href={'mailto:mariaferrarihardoy@gmail.com'} >
        <MdOutlineAlternateEmail style={{marginLeft:'4px',backgroundColor:'#746d6d ', color: 'white ',cursor:'pointer',width:'25px', height:'25px', padding:'6px', borderRadius:'50%', fontSize:'1.5em'}}  /> 
        </Link>
        <Link href={'https://www.instagram.com/basiliotaller'} target='_blank' >
        <FiInstagram style={{marginLeft:'4px',backgroundColor:'#746d6d ', color: 'white ',cursor:'pointer', width:'25px', height:'25px', padding:'6px', borderRadius:'50%' , fontSize:'1.5em'}}  />
        
        </Link>
     </Box>  
    )
}
export default SocialMedia