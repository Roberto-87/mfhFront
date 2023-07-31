'use client';
import styles from '../components/CardWorks.module.css'
import styleExhibition from '../components/CardExhibition.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Loader  from './Loader';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
     textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CardExhibitions=({ exhibitions})=>{
  const[loading, setLoading]= useState(false)
  const[images, setImages]= useState([])

  
  useEffect(()=>{
    const AllImages= exhibitions?.map((each)=> each.image)
    setImages(AllImages)
    setLoading(true)     
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },50)
  }
 },[])

  
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 1, sm: 1, md: 1, lg:2, xl:3 }} direction="row" justifyContent="center" alignItems="center" >
          {loading && <Loader/>}
           
            {exhibitions && exhibitions.map((exhibition, index) => (
              <Grid item xs={2} sm={4} md={3} lg={3} xl={3} key={index} >
                <Item  direction="column" >
                  <Link href={`/exhibitions/${(exhibition?.id)}`}>
                  { exhibition.images.map((each, index)=> index<1 &&
 
                  <img className={styleExhibition.cardImageExhibition} key={index} src={each} /> 
                 
                  )}
                  
                  </Link>
                  {images &&
                  <div>

                    <h2 className={styles.cardItem} >{exhibition.title}</h2>
                    <p  className={styles.cardItem}>{exhibition.place}</p>
                    <p  className={styles.cardItem}>{format(parseISO(exhibition.date), "MMMM yyyy", { locale: es })}</p>
                    
                  </div>
                  }

                    
                </Item>
              </Grid>
            ))}


          </Grid>
        </Box>
      );;
}

export default CardExhibitions


