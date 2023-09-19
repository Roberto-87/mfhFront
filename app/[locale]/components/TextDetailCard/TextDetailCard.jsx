import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'

const TextDetailCard=({paper})=>{


  if(paper.image){
    return(
   <Box sx={styleTextDetail} className={style.containerDocument} >
  
      {paper.format === 'pdf' ?
      <Box sx={{display:'flex', justifyContent:'center',color:'black', width:'150vw',height:'100%'}} className={style.lastContainerDocument}>
        <iframe   loading="lazy" effect="opacity" className={style.document} src={paper.image} style={{width:'105%',height:'100%'}} alt={paper.title}/>
      </Box>
        :
        <LazyLoadImage  loading="lazy" effect="opacity" className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title} />
      }
   </Box>     
   )
  }
}
export default TextDetailCard