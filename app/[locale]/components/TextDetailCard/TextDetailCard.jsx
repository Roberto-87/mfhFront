import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"
import LazyLoad from 'react-lazy-load';
import { lazy } from 'react';

const TextDetailCard=({paper})=>{


  if(paper.image){
    return(
   <Box sx={styleTextDetail} className={style.containerDocument} >
  
      {paper.format === 'pdf' ?
      <Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'150%',height:'100%'}} className={style.lastContainerDocument}>
        
        <iframe  loading="lazy" effect="opacity" className={style.document} src={paper.image} style={{width:'105%',height:'100%'}} alt={paper.title}/>
     </Box>
        :
       <img   loading="lazy" effect="opacity" className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title}/>
     }
   </Box>     
   )
  }
}
export default TextDetailCard