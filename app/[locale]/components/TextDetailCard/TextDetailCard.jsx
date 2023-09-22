import { Box } from "@mui/material"
import {  styleText, stylePaper} from '../ModalCuratorialText/style'
import stylesMobile from '../ModalCuratorialText/ModalCuratorialText.module.css'
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
  <Box >
  <Box sx={stylePaper} loading="lazy"  >
<embed className={stylesMobile.docModal}  src={(paper.image)} width={800} height={550} priority style={{styleText}}/>  
 </Box>      
 </Box>   
);
  }
export default TextDetailCard

{/* <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid xs={12} md={12} lg={12} sm={12} >
      {  paper.image &&      <Item  style={{width:'100%', display:'flex', justifyContent:'center'}} >
 {  paper.image &&  paper.format === 'pdf' ?
<Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'60vh' }} className={style.lastContainerDocument}>
  <iframe type="application/pdf" frameborder={0} width={100} loading="lazy" effect="opacity" className={style.document} src={paper.image} style={{width:'100%',height:'100%',marginRight:'10px', marginBottom:'10%' }} alt={paper.title}/>
</Box>
  :
<Box loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100%'}} className={style.lastContainerDocument}>
 <img loading="lazy" effect="opacity" className={style.document} src={imageFormat(paper.image)} style={{width:'35%'}} alt={paper.title}/>
 </Box>}
        </Item>
        }
      </Grid>
    </Grid>
  </Box> */}