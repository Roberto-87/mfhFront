'use client'
import { useEffect,useState } from "react"
import {fetchData, returnCuratorialText} from "../exhibitionData"
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import getData from "../../hooks/getData";
import { EXHIBITIONS, TEXT } from "../../../utils/consts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '5%',

  right: '15%',  
  width: 850,
  height:550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  transition: 'transform 0.5s ease', 
  transform: 'scale(1)',
/*   ':hover': {
      transform: 'scale(1.1)',
      transition: '2s ease',
  }, */
};

const styleText = {
  position:'relative',   
};

const Exhibition=({params })=>{
    const {id}= params
   const[exhibitionText,setExhibitionText]= useState({document:'', title:'', author:''})

    const[exhibition,setExhibition]= useState('')
    const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      useEffect(() => { 
        const fetchDataExhibition = async () => {
          const actualExhibition = await getData(`${EXHIBITIONS}/${id}`);
          setExhibition(actualExhibition[0]);
          const curatorialTexts= await getData(`${TEXT}/curatorial`)
          const actualCuratorial= curatorialTexts.find((text)=> text.exhibitionId===id && text.status===true) 
          if(actualCuratorial){
            setExhibitionText({['document']:actualCuratorial.image, ['title']:actualCuratorial.title, ['author']:actualCuratorial.author })
          }
  
        };   
         fetchDataExhibition();  
      }, []);
        

    return ( 
        <Box >  
          <div style={{color:'black'}}>
        <h1>{exhibition.exhibitionName}</h1>
       {exhibition.format && <h2>format: {exhibition.format}</h2>}
        <p>{exhibition.place}</p>
        <p>{exhibition.date}</p>
            </div>       

  {exhibitionText.document && 
        <div>
   <Button onClick={handleOpen}>Link a texto curatorial</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 9, xl:3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
     <Item >
      <div style={{width:'50%'}}>

         <embed
                 src={exhibitionText.document}
                  width={600}
                  height={450}
                  priority
                  style={{styleText}}
                
            
                />
      </div>
     </Item>

          <Typography id="modal-modal-description" sx={{ mt: 2, color:'Black' }}>
          {exhibitionText.title}- {exhibitionText.author}
          </Typography>
          </Grid>
        </Box>
      </Modal>
    </div>
}
       {
         exhibition?.images?.map((image, index)=> <img style={{width:'50%', padding:'1px'}} key={index} src={image}/>)
        } 
        </Box>

        )
}


export default Exhibition