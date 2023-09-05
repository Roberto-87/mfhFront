import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"

const TextDetailCard=({paper})=>{
 return(
 <Box sx={styleTextDetail} className={style.containerDocument} >
    {paper.format === 'pdf' ?
      <embed src={imageFormat(paper.image)} style={{width:'65%',height:'100%'}} alt={paper.title}></embed>
    :
    <img src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title} />
    }
 </Box>     
 )
}
export default TextDetailCard