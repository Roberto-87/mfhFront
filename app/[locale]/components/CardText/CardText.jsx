import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import {Item} from './itemStyle.js'
import { comfortaa } from '../../fonts/fonts.js';
import styles from './CardText.module.css'

const CardText=({texts})=>{
     return(  
        <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 1, md: 9 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >        
      {texts &&
        texts.map((text, index) => (
          <div  className={styles.textContainerContainer}item xs={2} sm={4} md={3} key={text.id} style={{display:'flex', justifyContent:'flex-start', marginLeft:'2.6%', flexDirection:'column', width:'100%'}}>
     <div className={styles.textContainer}>
              <Link href={`/text/${text.id}`} style={{margin:'0'}}>
                <h4  className={comfortaa.className} style={{ color: 'black' }}>{`${text.title} por ${text.author}.`}</h4>
              </Link>
  </div>
          </div>
        ))}
      </Grid>
     </Box>
)}

export default CardText
{/*               <Link href={`/text/${text.id}`}>
              {text.type==='curatorial' ? 
              <h2 className={`${comfortaa.className}${styles.type}`} style={{ color: 'grey' }}><i>TEXTO {text.type.toUpperCase()}</i></h2>
              :
              <h2 className={`${comfortaa.className}${styles.type}`} style={{ color: 'grey' }}><i></i>{text.type.toUpperCase()}</h2>
            }     </Link> */}