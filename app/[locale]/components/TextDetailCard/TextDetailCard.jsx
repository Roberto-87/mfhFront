import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"

const TextDetailCard=({paper})=>{

  if(paper.image){
    return(
   <Box sx={styleTextDetail} className={style.containerDocument} >
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center',color:'black'}} className={style.lastContainerDocument}>
    </Box>
  
      {paper.format === 'pdf' ?
        <embed className={style.document} src={paper.image} style={{width:'65%',height:'100%'}} alt={paper.title}></embed>
      :
      <img className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title} />
      }
   </Box>     
   )
  }
}
export default TextDetailCard