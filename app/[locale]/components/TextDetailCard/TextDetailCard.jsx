import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"
import LazyLoad from 'react-lazy-load';
import { lazy } from 'react';
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'

const TextDetailCard=({paper})=>{

return(
      <>
      {!paper.image &&  <Box sx={styleTextDetail} className={style.containerDocument} >
         <Box loading="lazy" sx={{top:'5%',left:'50%' , height:'30vh', position:'fixed',   alignItems: 'center',display:'flex',  justifyContent:'center',color:'black', width:'150%'}} >
           <LoaderAnimation />
        </Box>
    </Box>  
}
<Box sx={styleTextDetail} className={style.containerDocument} >
  {paper.image &&  paper.format === 'pdf' ?
      <Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100%'}} className={style.lastContainerDocument}>
        <iframe type="application/pdf" frameborder={0}  marginwidth={'10px'} loading="lazy" effect="opacity" className={style.document} src={paper.image} style={{width:'100%',height:'100%'}} alt={paper.title}/>
     </Box>
        :
      <Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100%'}} className={style.lastContainerDocument}>
         <img loading="lazy" effect="opacity" className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title}/>
       </Box>
     }
    
    </Box>     
      </>
   )
  }

export default TextDetailCard