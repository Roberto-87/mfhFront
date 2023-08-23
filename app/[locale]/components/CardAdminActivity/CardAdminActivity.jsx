import { Box, Card, Grid, Switch } from "@mui/material"
import { useState } from "react"
import ModalAdminWOrks from "../ModalAdminWorks/ModalAdminWorks"
import ModalAdminExhibitions from "../ModalAdminExhibitions/ModalAdminExhibitions"
import ModalAdminPortfolio from "../ModalAdminPortfolio/ModalAdminPortfolio"
import ModalAdminText from "../ModalAdminText/ModalAdminText"
import { useEffect } from "react"
import notFound from '../../assets/no-image-available-icon-vector-id1216251206-568614111.jpg'
 

const CardAdminActivity=({work,activeWorks, inactiveWorks, index, onHandleSwitch})=>{
    const[activeImage, setActiveImage]= useState()
    const [open, setOpen] = useState(false);
    const [localActiveImage, setLocalActiveImage] = useState(null);
    const [pathname, setPathname]= useState()

    useEffect(()=>{
       const router= window.location.pathname.split('/').at(-1)
       setPathname(router)
         },[pathname])

    const handleOpen = (urlImage) => {
           setLocalActiveImage(urlImage);  
           setActiveImage(activeImage)
           setOpen(true);
       };
   
    return(
        <>
          <Box sx={{ flexGrow: 3, alignContent: "center", width:'50%',borderRadius:'10%'  }}>
        <Card style={{  cursor:'pointer', height:'100%',width:'100%' ,display:'flex', justifyContent:'center'}} key={work.id}>
             <Grid item xs={6}  container spacing={1} style={{width:'100%' ,}}  >

           {  work.status===false &&   <Switch  onChange={()=>onHandleSwitch(inactiveWorks[index])} /> }
           {  work.status===true &&   <Switch defaultChecked onChange={()=>onHandleSwitch(activeWorks[index])} /> }
        
               {pathname==='portfolio' || pathname==='text'  ?   
               <Grid style={{ width:'100%'}}>
                  {/* <img  alt={work.title} width={120} height={90} onClick={handleOpen}  style={{cursor:'pointer'}}  src= {work.image} />*/}
                 <div onClick={()=>handleOpen(work.image)}>
                  <p>{work.title}</p> 
                  <p>{work.language}</p> 

                 </div>
               </Grid>
               :
               <Grid style={{ width:'60%'}}>
               {work.exhibitionName &&  <img alt={work.title} onClick={handleOpen}  width={100} height={90} src={work.images[0] || notFound}/>}
              {work.title &&      <img alt={work.title} onClick={handleOpen}  width={100} height={90} src={work.image }/> }
               </Grid>
            }
               
                          
            {pathname==='cover' &&             <Grid style={{ width:'100%'}}>
                   <img  alt={work.title} width={120} height={90} onClick={handleOpen}  style={{cursor:'pointer'}}  src= {work.image} />
                 <div >
                  <p>{work.title}</p> 
                  <p>{work.language}</p> 

                 </div>
               </Grid>}

               </Grid>
        </Card>
             </Box>
           {
              open && work.section==="obra" && 
              <ModalAdminWOrks activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  
           }
          {
              open && pathname==="text" && 
              <ModalAdminText activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  
           }

           {
              open && work.type==="exhibiciones" && 
              <ModalAdminExhibitions activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  
           }

            {
              open && work.type==="portfolio" &&                 
              <ModalAdminPortfolio activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  

}
    
        </>)
}
export default CardAdminActivity