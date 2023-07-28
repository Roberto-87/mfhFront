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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
     textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CardExhibitions=({ exhibitions})=>{

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 1, sm: 1, md: 1 }} direction="row" justifyContent="center" alignItems="center" >
  
            {exhibitions && exhibitions.map((exhibition, index) => (
              <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={index} >
                <Item  >
                  <Link href={`/exhibitions/${(exhibition.title).toLowerCase().replace(/ /g, "")}-${index}`}>
                  { exhibition.images.map((each, index)=> index<1 &&
 
                  <img className={styleExhibition.cardImageExhibition} key={index} src={each} /> 
                 
                  )}
                  
                  </Link>
                    <h2 className={styles.cardItem} >{exhibition.title}</h2>
                    <p  className={styles.cardItem}>{exhibition.place}</p>
                    <p  className={styles.cardItem}>{format(parseISO(exhibition.date), "MMMM yyyy", { locale: es })}</p>
                    ;
                </Item>
              </Grid>
            ))}


          </Grid>
        </Box>
      );;
}

export default CardExhibitions


