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
 {  paper.image &&  paper.format === 'pdf' ?
  <Box sx={stylePaper} loading="lazy"  >
<embed className={stylesMobile.docModal}  src={(paper.image)} width={800} height={550} priority style={{styleText}}/>  
 </Box>
 :
  <Box sx={stylePaper} loading="lazy"  >
<img className={stylesMobile.docModal}  src={(paper.image)} width={800} height={550} priority style={{styleText}}/>  
  </Box>    
}
 </Box>   
);
  }

export default TextDetailCard
