'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link'; 
import LoaderAnimation  from '../LoaderAnimation/LoaderAnimation';
import { useEffect, useState } from 'react';
import {comfortaa} from '../../fonts/fonts'
import { imagesMaped, exhibitionSort } from '../../../utils/functions';
import ExhibitionData from '../ExhibitionData/ExhibitionData';
import ExhibitionLink from '../ExhibitionLink/ExhibitionLink';
import LoadingBar from 'react-top-loading-bar'
import AOS from 'aos';

const CardExhibitions=({ exhibitions})=>{
  const[orderedExhibition, setOrderedExhibition]=useState()
  const[loading, setLoading]= useState(false)
  const[images, setImages]= useState([])
  const [progress, setProgress] = useState(0)
  const[imageLoaded, setImageLoaded]= useState(false)
  
  useEffect(()=>{
    AOS.init({
      duration: 1200,
    })

    setLoading(true)     
    const orderedExhibitions= exhibitionSort(exhibitions)
    setOrderedExhibition(orderedExhibitions)
    const mapImages= imagesMaped(orderedExhibitions)
    setImages(mapImages)
    
    setProgress(100)
  setLoading(false)     
 },[])

 const handleImageLoad = () => {
  setImageLoaded(true);     
}; 
  
 return (
      <main >
        <Box sx={{ flexGrow: 1 }}    >
          <Grid container spacing={{ xs: 2, md: 3, lg:2, xl:2 }} columns={{ xs: 1, sm: 1, md: 1, lg:3, xl:3 }} direction="row" justifyContent="center" alignItems="center" >
          <LoadingBar  color='black'progress={progress}  />
          {progress< 100 &&
          <div style={{display:'flex', justifyContent:'center',marginTop:'15%'}}>
<LoaderAnimation/>
          </div>
          }
            {orderedExhibition && orderedExhibition.map((exhibition, index) => (
              <Grid   data-aos={'fade-up'} item xs={2} sm={4} md={3} lg={2} xl={3} key={index} >
                <div  direction="column" className={comfortaa.className}>
            <ExhibitionLink handleImageLoad={handleImageLoad}  exhibition={exhibition} />
          {imageLoaded &&
                  <div style={{fontSize:'0.7rem'}} >
                  <ExhibitionData exhibition={exhibition}/>
              </div>
                }
              
                </div>
              </Grid>
            ))}
                 </Grid>
        </Box>
      </main>
      );
 }
export default CardExhibitions