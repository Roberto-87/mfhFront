'use client'
import styles from '../components/CardWorks.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  useState } from 'react';
import { Button, Modal, Typography  } from '@mui/material';
import ImageZoom from "react-image-zooom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import{GrNext, GrPrevious} from 'react-icons/gr'
import { useEffect } from 'react';
import  Loader  from "../components/Loader";
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',

  width: 650,
  bgcolor: 'black',
  boxShadow: 24,
    
};

const CardWorks = ({works}) => {
  const[loading, setLoading]= useState(false)
  const [carrousel, setCarrousel] = useState(false);
  let [imageActive, setImageActive] = useState();
  let[imageActiveIndex, setImageActiveIndex]= useState(1)
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const handleOpen = () => setOpen(true);
  const[images, setImages]= useState([])

  useEffect(()=>{
    const allImages= works.map((work)=>work.image )
    setImages(allImages)
    setLoading(true)     
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },50)
  }
 },[])

  const handlerClick = (event) => {
    setCarrousel(!carrousel);
    setImageActive(event.target.currentSrc);
    let indexImageActive= works.findIndex((url)=> url.image===imageActive)
    setImageActiveIndex(indexImageActive)
  };

  const handleClose=()=>{
    setOpen(false)
  }

  const handleZoom=()=>{
    setZoom(true)

  }

  const onPrevious=()=>{    
    let indexImageActive= works.findIndex((url)=> url.image===imageActive)
    setImageActive('')
    
    if(indexImageActive-1 < 0){
     setImageActiveIndex(works.length-1)
     setImageActive(works.at(-1).image)
    }else{
      setImageActiveIndex((indexImageActive-1))
      setImageActive(works[indexImageActive-1].image)
    }
  }
  const onNext=()=>{
    setImageActiveIndex((imageActiveIndex + 1) % works.length);
    setImageActive(works[(imageActiveIndex + 1) % works.length].image);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>

      {loading && <Loader/>}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 9 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {works &&
          works.map((work) => (
            <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={work.id}>
              <Item >
              <Button onClick={handleOpen} >
                <img
                  className={styles.cardImage}
                  src={work.image}
                  onClick={handlerClick}
                  alt={work.title}
         
                  priority
                  
       
            
                />
  </Button>
                    <div>
                   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
       {open && <Button onClick={handleClose} style={{color:'gray', position:'absolute', right:'100%', top:'0%', fontSize:'1em'}}>CERRAR</Button>}
      <div style={{display:'flex', flexDirection:'row-reverse'}}>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide ><button style={{position:'relative',cursor:'pointer', bottom:'50%', left:'1px'}} onClick={onPrevious}><GrPrevious/></button> <img style={{width:'65%'}} src={imageActive} alt={work.title}   onMouseLeave={handleZoom}  onMouseEnter ={handleZoom} zoom="200" /><button onClick={onNext} style={{position:'relative', bottom:'50%',cursor:'pointer', left:'2px'}}><GrNext/></button></SwiperSlide>
           </Swiper>
     </div>
       { imageActive &&   <Typography id="modal-modal-description" sx={{ mt: 2, color:'gray' }}>
    {         `         ${work.title} ${work.year} ${work.material} ${work.size}  `} {/*  ${imageActiveIndex+1} de ${works.length} */}
          </Typography>}
          </Box>
      </Modal>
          </div>
            {images &&
            <div>
              <h2 className={styles.cardItem}>{work.title}</h2>
              <p className={styles.cardItem}>{work.size}</p>
              <p className={styles.cardItem}>{work.material}</p>
              <p className={styles.cardItem}>{work.year}</p>

            </div>
              }
              </Item>
           </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardWorks;
