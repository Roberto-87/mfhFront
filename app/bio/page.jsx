'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Loader from "../components/Loader";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor:'black',
  color: theme.palette.text.secondary,
}));


 const Bio = () => {
    const [bio, setBio] = useState({text:'', image:''});
    const[loading, setLoading]= useState(false)
  
    
    useEffect(()=>{
      setLoading(true)     
    if(bio){
      setTimeout(()=>{
        setLoading(false);
     },50)
    }
   },[])

    useEffect(() => {
      const fetchData = async () => {
        const bioData = await getData('bio');
        setBio({text:bioData[0].text, image:bioData[0].image})
      };      
      fetchData();  
    }, []);

    return (< > 
        <Navigation/>     
        <Box sx={{ flexGrow: 1, marginTop:'2%' }}>
      
      {loading && <Loader/>}
          <Item>
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <Item>
        <img src={bio.image} style={{width:'45%'}} alt='imagen de María'  />
    </Item>
  </Grid>
  <Grid item xs={12} md={8}>
{bio.image &&       
    <Item >
    <p style={{color:'white'}}>{bio.text}</p> 
    </Item>
    }
  </Grid>

</Grid>
          </Item>

       </Box>

      
      </>
        )
}
export default Bio



