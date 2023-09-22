import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { Item, styleText} from './style'
import stylesMobile from './ModalCuratorialText.module.css'
import LoadingBar from 'react-top-loading-bar'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'

const style = {
  position: 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 550,
  width:'100%',
  bgcolor: 'background.paper', 
  boxShadow: 24,
  display:'flex',
  justifyContent:'center'
};

const ModalCuratorialText=({exhibitionText, open, onClose, progress})=>{
  
  return(
    <div>
         {!exhibitionText.document && <LoaderAnimation/>}
        <LoadingBar  color='black'progress={progress}  />
    <Modal  open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
   <Box >

      <Box sx={style} loading="lazy"  >
   <embed className={stylesMobile.docModal}  src={(exhibitionText.document)} width={800} height={550} priority style={{styleText}}/>  
     </Box>     
 
     </Box> 

    </Modal>
  </div>
    
)
}
export default ModalCuratorialText

 {/* <Box sx={{display:'flex',flexDirection:'row-reverse' }} onClose={onClose}>
        <Box onClose={onClose} className={stylesMobile.containerClose} style={{   width:'100%', display:'flex', justifyContent:'flex-end', position:'fixed', top:'.1%', left:'1.2%', height:'20%' }}>
     <CloseButton   />  
       </Box> 
        <LoadingBar  color='black'progress={progress}  />
   <Modal sx={{width:'99%',backgroundColor: 'white'}} className={stylesMobile.modalContainer} open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box className={stylesMobile.containerDocument} sx={{ flexGrow: 1, display:'flex', justifyContent:'center', width:'98% '}} >
      <Grid container spacing={3}  >
        <Grid xs={12} md={12} lg={12} sm={12}  >
         <Item  style={{width:'100%', display:'flex', justifyContent:'center', height:'100vh'}} >
      <Box  loading="lazy" sx={{display:'flex', justifyContent:'center',color:'black', width:'100%',height:'100vh', marginTop:'4%' }} >
   <embed className={stylesMobile.docModal}  src={(exhibitionText.document)} width={1200} height={540} priority style={{styleText}}/>  
     </Box>     
        </Item>
      </Grid>
     </Grid>
   </Box>
  </Modal>
</Box> */}