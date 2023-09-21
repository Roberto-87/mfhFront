import { Box } from "@mui/material"
import {styleTextDetail} from './itemStyle'
import style from './TextDetailCard.module.css'
import { imageFormat } from "../../../utils/functions"
import LazyLoad from 'react-lazy-load';
import { lazy } from 'react';
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styled from "@emotion/styled";
import { Item } from "../CardText/itemStyle";

const TextDetailCard=({paper})=>{

return(
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
   
      <Grid xs={12}  >
        <Item  style={{width:'100%', display:'flex', justifyContent:'center'}} >
 {  paper.image &&  paper.format === 'pdf' ?
<Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'50vh' }} className={style.lastContainerDocument}>
  <iframe type="application/pdf" frameborder={0}  loading="lazy" effect="opacity" className={style.document} src={paper.image} style={{width:'100%',height:'100%',marginRight:'10px', marginBottom:'10%' }} alt={paper.title}/>
</Box>
  :
<Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100%'}} className={style.lastContainerDocument}>
 <img loading="lazy" effect="opacity" className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title}/>
 </Box>}
        </Item>
      </Grid>

    </Grid>
  </Box>
);
  }

export default TextDetailCard

{/* <>
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
</> */}