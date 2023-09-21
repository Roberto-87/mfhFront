import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { comfortaa } from "../../fonts/fonts"
import {style, Item, styleText} from './style'
import stylesMobile from './ModalCuratorialText.module.css'
import LoadingBar from 'react-top-loading-bar'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import CloseButton from "../CloseButton/CloseButton"
import zIndex from "@mui/material/styles/zIndex"

const ModalCuratorialText=({exhibitionText, open, onClose, progress})=>{
   
   return(
     <Box sx={{display:'flex',flexDirection:'row-reverse' }} onClose={onClose}>
        <Box onClose={onClose} className={stylesMobile.containerClose} style={{   width:'100%', display:'flex', justifyContent:'flex-end', position:'fixed', top:'.1%', left:'2.5%', height:'20%' }}>
     <CloseButton   />  
       </Box> 
        <LoadingBar  color='black'progress={progress}  />
   <Modal sx={{width:'99%'}} className={stylesMobile.modalContainer} open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box className={stylesMobile.containerDocument} sx={{ flexGrow: 1, display:'flex', justifyContent:'center', width:'99% '}} >
      <Grid container spacing={3}  >
        <Grid xs={12} md={12} lg={12} sm={12}  >
         <div  style={{width:'100%', display:'flex', justifyContent:'center', height:'100vh'}} >
      <Box  loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100vh', marginTop:'4%' }} >
        <embed className={stylesMobile.docModal}  src={(exhibitionText.document)} width={1200} height={540} priority style={{styleText}}/>
     </Box>     
        </div>
      </Grid>
     </Grid>
   </Box>
  </Modal>
</Box>
)
}
export default ModalCuratorialText