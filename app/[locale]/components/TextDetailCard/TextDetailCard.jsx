import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'

const TextDetailCard=({paper})=>{
 return(
  <>
  {paper.format === 'pdf' ?
<Box sx={styleTextDetail} className={style.containerDocument} >
    <embed src={paper.image.replace('http','https')} style={{width:'65%',height:'100%'}} alt={paper.title}></embed>
    </Box>     
  :
  <Box sx={styleTextDetail} className={style.containerDocument} >
  <img src={paper.image} style={{width:'35%'}} alt={paper.title} />
  </Box> 
  }
  
  </>

 )
}
export default TextDetailCard