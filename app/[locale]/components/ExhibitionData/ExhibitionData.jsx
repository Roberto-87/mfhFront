'use client'
import { useEffect } from "react";
import { comfortaa } from "../../fonts/fonts"
import styles from './ExhibitionData.modules.css'
import AOS from 'aos';


const ExhibitionData=({exhibition})=>{
  useEffect(()=>{
    AOS.init(),[]})

    return(
     <>
  {exhibition &&
  <div >
    <div style={{color:'black'}} className={styles.containerExhibition}>
        <div style={{display:'flex',justifyContent:'center', alignItems:'center' }}>
      <h1 className={comfortaa.className} style={{ margin:0, padding:'1%', marginTop:'6px'}}> {exhibition.exhibitionName}</h1>
     </div>
     </div>

    <div style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}     >
     {exhibition.format && <h3 className={comfortaa.className} style={{ margin:'1px',color:'black', marginTop:'1%'}}>Exhibición {exhibition.format}</h3>}
    </div>

    <div style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
      <p className={comfortaa.className}  style={{ margin:'4px',color:'black'}}>{exhibition.place}, {exhibition.date}. </p>
      <p className={comfortaa.className}  style={{ margin:'1px',color:'black'}}></p>
    </div>
    </div>
    }
    </>
   )
}

export default ExhibitionData