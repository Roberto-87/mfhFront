import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { comfortaa } from "../../fonts/fonts"
import {style, Item, styleText} from './style'
import stylesMobile from './ModalCuratorialText.module.css'
import LoadingBar from 'react-top-loading-bar'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'

const ModalCuratorialText=({exhibitionText, open, onClose, progress})=>{
   
   return(
        <Box>
                 <LoadingBar  color='black'progress={progress}  />
            <Modal className={stylesMobile.modalContainer}  open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 9, xl:3 }}  direction="row" justifyContent="center" alignItems="center">
             <Item >
     {/*          <div style={{width:'50%'}}> */}
                <embed className={stylesMobile.doc} src={(exhibitionText.document)} width={1200} height={500} priority style={{styleText}}/>
           {/*    </div> */}
             </Item>
             <Typography id="modal-modal-description" className={`${stylesMobile.containe}${comfortaa.className}`} sx={{ mt: 2, color:'Black' }}>
               {exhibitionText.title}- {exhibitionText.author}
             </Typography>
               </Grid>
            </Box>
           </Modal>
      </Box>
    )
}
export default ModalCuratorialText