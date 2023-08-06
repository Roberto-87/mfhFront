import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  }));
  

const CardText=({texts})=>{
  console.log(texts)
   
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
          <Grid item xs={2} sm={4} md={3} key={text.id}>
            <Item>
              <Link href={`/text/${text.id}`}>
                <h2 style={{ color: 'white' }}>{text.title.toUpperCase()}</h2>
              </Link>
              <Link href={`/text/${text.id}`}>
                <h2 style={{ color: 'grey' }}>{text.type.toUpperCase()}</h2>
                   <h2 style={{ color: 'white' }}>{text.author.toUpperCase()}</h2>
                   </Link>
            </Item>
          </Grid>
        ))}

        </Grid>
        </Box>
)}

export default CardText