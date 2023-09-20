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
import Footer from '../Footer/Footer';
import styles from '../CardWorks/CardWorks.module.css'

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
        <Box sx={{ flexGrow: 1, paddingBottom:'20px' }}    >
          <Grid container spacing={{ xs: 2, md: 3, lg:2, xl:2 }} columns={{ xs: 1, sm: 1, md: 1, lg:3, xl:3 }} direction="row" justifyContent="center" alignItems="center" >
          <LoadingBar  color='black'progress={progress}  />
          {!imageLoaded && <div style={{top:'5%',left:'50%' , height:'30vh', position:'fixed',   alignItems: 'center',display:'flex', justifyContent:'center'
}}>   <LoaderAnimation   />
      </div>
   }

            {orderedExhibition && orderedExhibition.map((exhibition, index) => (
              <Grid   item xs={2} sm={4} md={3} lg={2} xl={3} key={index} >
                <div   direction="column" className={comfortaa.className} data-aos="fade-up"   data-aos-duration="1000">
            <ExhibitionLink handleImageLoad={handleImageLoad}  exhibition={exhibition} />
          {imageLoaded &&
                  <div style={{fontSize:'0.7rem' }}  >
                  <ExhibitionData exhibition={exhibition} imageLoaded={imageLoaded}/>
              </div>
                }
              
                </div>
              </Grid>
            ))}
                 </Grid>
                 {imageLoaded && 
      <Box sx={{ flexGrow: 1, paddingTop:'20px',marginLeft:'25px' }} className={comfortaa.className}>
      <Grid sx={{display:'flex', justifyContent:'start', width:'90%'}}    >
        <Footer style={{color:'transparent' }}/>
      </Grid>
     </Box>
          }
        </Box>
      </main>
      );
 }
export default CardExhibitions