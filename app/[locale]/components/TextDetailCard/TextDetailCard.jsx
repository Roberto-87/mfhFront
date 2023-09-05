import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'

const TextDetailCard=({paper})=>{
 return(
 <Box sx={styleTextDetail} className={style.containerDocument} >
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center',color:'black'}}>
  </Box>

    {paper.format === 'pdf' ?
      <embed src={paper.image.replace('http','https')} style={{width:'65%',height:'100%'}} alt={paper.title}></embed>
    :
    <img src={paper.image} style={{width:'35%'}} alt={paper.title} />
    }
 </Box>     
 )
}
export default TextDetailCard