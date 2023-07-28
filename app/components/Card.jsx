'use client';
import styles from '../components/CardWorks.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Popper } from '@mui/material';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const CardWorks=({works, texts})=>{

  const[carrousel, setCarrousel]=useState(false)
  const[imageActive, setImageActive]= useState()

  const handlerClick=(event)=>{
    setCarrousel(!carrousel)
    setImageActive(event.target.currentSrc)
  }
  const open = Boolean(carrousel);
  const id = open ? 'simple-popper' : undefined;




    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 9 }} direction="row" justifyContent="center" alignItems="center">
       
         {works && works.map((work) => (
              <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={work.id}>
                <Item>
                 <img className={styles.cardImage} src={work.image} onClick={handlerClick} alt={work.title} />
                  <h2 className={styles.cardItem}>{work.title}</h2>
                  <p className={styles.cardItem}>{work.material}</p>
                  <p className={styles.cardItem}>{work.year}</p>
                </Item>
                <Popper id={id} open={open} anchorEl={carrousel}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex', justifyContent:'center' }} >
        <button >before</button>         
             <img style={{width:'40%'}} src={imageActive} alt="" />
 <button >next</button>
        </Box>
      </Popper>
              </Grid>
            ))}

{texts && texts.map((text,index) => (
              <Grid item xs={2} sm={4} md={3} key={text.id}>
                <Item>
                <Link href={`/text/${text.title}-${[index]}`}> <h2 style={{color:'white'}}>{(text.title).toUpperCase()}</h2></Link> 
                 <Link href={`/text/${text.title}-${[index]}`}><h2 style={{color:'grey'}}>{(text.type).toUpperCase()}</h2></Link> 
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      );;
}

export default CardWorks


