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
   left: '35%',
  right: '50%',  
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  transition: 'transform 0.5s ease', 
  transform: 'scale(1)',
    ':hover': {
      transform: 'scale(1.2) translateY(-6.5%)',
      transition: '2s ease'

  },
};

const Exhibition=({params })=>{
    const {id}= params
   const[exhibitionText,setExhibitionText]= useState('')

    const[exhibition,setExhibition]= useState('')
          const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      useEffect(() => { 
        const fetchDataExhibition = async () => {
          const actualExhibition = await getData(`exhibitions/${id}`);
          setExhibition(actualExhibition[0]);
          /*        const Alltexts= await returnCuratorialText()
          const text= Alltexts?.find((text)=> (text.exhibitionName).toLowerCase().replace(/ /g, "")===title.toLowerCase().replace(/ /g, ""))
          
         if(text){
           setExhibitionTitle(title);
           setExhibitionPlace(place)
           
           setExhibitionDate(date)
           setExhibitionText(text.image) 
          }
          */         };   
         fetchDataExhibition();  
      }, []);
        

    return ( 
        <Box>         
        <h1>{exhibition.exhibitionName}</h1>
        <p>{exhibition.place}</p>
        <p>{exhibition.date}</p>
  {exhibitionText && 
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
         <Image
                 src={exhibitionText}
                  width={300}
                  height={400}
                  priority
                  style={{position:'relative'}}
            
                />
     </Item>

          <Typography id="modal-modal-description" sx={{ mt: 2, color:'Black' }}>
          {exhibitionTitle}- {exhibitionDate}
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