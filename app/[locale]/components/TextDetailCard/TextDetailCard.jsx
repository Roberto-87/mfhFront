import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'

const TextDetailCard=({paper})=>{
 return(
  <>
  {paper.format === 'pdf' ?
    <div style={{display:'flex', justifyContent:'center',height:'100%'}}>
      <embed src={paper.image.replace('http','https')} style={{width:'65%',height:'100%'}} alt={paper.title}></embed>
    </div>

  :
  <div style={{display:'flex', justifyContent:'center',height:'100%'}}>
  <img src={paper.image} style={{width:'35%'}} alt={paper.title} />
  </div>

  }
  
  </>

 )
}
export default TextDetailCard