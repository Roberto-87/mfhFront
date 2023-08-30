import { comfortaa } from "../../fonts/fonts"
import styles from './ExhibitionData.modules.css'

const ExhibitionData=({exhibition})=>{
    return(
     <>
     <div style={{color:'black'}} className={styles.containerExhibition}  >
        <div style={{display:'flex', alignItems:'center' , justifyContent:'center'}}>
      <h1 className={comfortaa.className} style={{ margin:0, padding:'1%', marginTop:'4px'}}> {exhibition.exhibitionName}</h1>
     </div>
     </div>

    <div style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
     {exhibition.format && <h3 className={comfortaa.className} style={{ margin:'1px',color:'black', marginTop:'1%'}}>Exhibición {exhibition.format}</h3>}
    </div>

    <div style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
      <p className={comfortaa.className}  style={{ margin:'4px',color:'black'}}>{exhibition.place}, {exhibition.date}. </p>
      <p className={comfortaa.className}  style={{ margin:'1px',color:'black'}}></p>
    </div>
     </>
    )
}

export default ExhibitionData