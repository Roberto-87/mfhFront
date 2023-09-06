import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { comfortaa } from "../../fonts/fonts"
import {style, Item, styleText} from './style'

const ModalCuratorialText=({exhibitionText, open, onClose})=>{
   
   return(
        <Box>
            <Modal  open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 9, xl:3 }}  direction="row" justifyContent="center" alignItems="center">
             <Item >
              <div style={{width:'50%'}}>
                <embed src={(exhibitionText.document)} width={600} height={450} priority style={{styleText}}/>
              </div>
             </Item>
             <Typography id="modal-modal-description" className={comfortaa.className} sx={{ mt: 2, color:'Black' }}>
               {exhibitionText.title}- {exhibitionText.author}
             </Typography>
               </Grid>
            </Box>
           </Modal>
      </Box>
    )
}
export default ModalCuratorialText