import { Box, Modal } from "@mui/material"
import {  styleText,styleModalCuratorial} from './style'
import stylesMobile from './ModalCuratorialText.module.css'
import LoadingBar from 'react-top-loading-bar'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'

const ModalCuratorialText=({exhibitionText, open, onClose, progress})=>{
   return(
    <div>
         {!exhibitionText.document && <LoaderAnimation/>}
        <LoadingBar  color='black'progress={progress}  />
    <Modal  open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
   <Box >
      <Box sx={styleModalCuratorial} loading="lazy"  >
   <embed className={stylesMobile.docModal}  src={(exhibitionText.document)} width={800} height={550} priority style={{styleText}}/>  
     </Box>      
     </Box> 
    </Modal>
  </div>    
)
}
export default ModalCuratorialText