import { Box, Card, Grid, Switch } from "@mui/material"
import { useState } from "react"
import ModalAdminWOrks from "../ModalAdminWorks/ModalAdminWorks"
import ModalAdminExhibitions from "../ModalAdminExhibitions/ModalAdminExhibitions"
import ModalAdminPortfolio from "../ModalAdminPortfolio/ModalAdminPortfolio"
import ModalAdminText from "../ModalAdminText/ModalAdminText"
import ModalAdminBio from "../ModalAdminBio/ModalAdminBio"
import { useEffect } from "react"
import notFound from '../../assets/no-image-available-icon-vector-id1216251206-568614111.jpg'
import Image from "next/image"
import {deleteFromCloud, deleteWork, imageFormat, searchFolder} from '../../../utils/functions'
import {BsTrash} from 'react-icons/bs'
import swal from "sweetalert"


const CardAdminActivity=({work,activeWorks, inactiveWorks, index, onHandleSwitch })=>{
    const[activeImage, setActiveImage]= useState()
    const [open, setOpen] = useState(false);
    const [localActiveImage, setLocalActiveImage] = useState(null);
    const [pathname, setPathname]= useState()

    const handleOpen = (urlImage, id) => {
          setOpen(true);
           setLocalActiveImage(urlImage);  
           setActiveImage(activeImage)
           if(pathname==='bio'){
              setLocalActiveImage(id);  
           } 
      };
    
      const handleClose=()=>{
        setOpen(false)
      }
      const onHandleDelete=async(work)=>{
        const {id, image}= work
        const workId= id
        const urlImage= image
        const folder= searchFolder(pathname) 
        const deleteFromDb= await deleteWork(pathname,workId,urlImage,folder)
        const deleteResourceFromCloud = await deleteFromCloud(urlImage,pathname, folder)
        console.log('Response from Cloud:', deleteResourceFromCloud);
        swal('Se ha eliminado el elemento.') 
      }
      useEffect(()=>{
        const router= window.location.pathname.split('/').at(-1)
        setPathname(router)
          },[pathname, localActiveImage, open])

    return(
        <>
          <Box sx={{ flexGrow: 3, alignContent: "center", width:'100%',borderRadius:'10%'  }}>
        <Card style={{  cursor:'pointer', height:'100%' ,display:'flex', justifyContent:'center'}} key={work.id}>
             <Grid item xs={6}  container spacing={1} style={{width:'100%' ,}}  >

           {  work.status===false && 
           <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
             <BsTrash style={{fontSize:'1.5rem', marginTop:'1px'}} onClick={()=>onHandleDelete(inactiveWorks[index])}/>
             <Switch   onChange={()=>onHandleSwitch(inactiveWorks[index])} /> 
           </div>
        
             }
           {  work.status===true &&   <Switch defaultChecked onChange={()=>onHandleSwitch(activeWorks[index])} /> }
        
               {pathname==='portfolio' || pathname==='text' || pathname==='contact' || pathname==='bio'?   
               <Grid style={{ width:'100%',display:'flex', justifyContent:'center'}}>
                 <div onClick={()=>handleOpen(work.image,work.id)} style={{width:'100%'}}>
                 {pathname==='bio' && work.image && <Image width={80} height={110} src={work.image} />}
                  <p  style={{ wordWrap: 'break-word' }}>{work.title}</p> 
                  <p>{work.language}</p> 
                  <p>{work.description}</p> 
                  <p  style={{ wordWrap: 'break-word' }}>{work.link}</p> 
                 </div>
               </Grid>
               :
               <Grid style={{ width:'100%', display:'flex', justifyContent:'center'}}>
                {work.exhibitionName && 
               <div >
                  <h6 style={{wordWrap: 'break-word',marginBottom:'4px',height:'10px', marginTop:'0'}}>{work.exhibitionName}</h6>
                  <img alt={work.title} onClick={()=>handleOpen(work.images[0])}  style={{marginBottom:'1px'}} width={130} height={100} src={imageFormat(work.images[0]) || notFound}/>
             </div>
               
                }
  
              {work.title &&  
              <div onClick={()=>handleOpen(work.id)}>
                <img alt={work.title} onClick={()=>handleOpen(work.image)}  style={{marginLeft:'6px'}}  width={100} height={90} src={imageFormat(work.image)}/> 
              </div>
                  }
               </Grid>
            }
               
                          
            {pathname==='cover' && 
                    <Grid style={{ width:'100%', display:'flex', justifyContent:'center'}}>
                   <div>
                   <img alt={work.title} onClick={()=>handleOpen(work.image)}  style={{marginLeft:'6px', cursor:'auto'}}  width={100} height={90} src={work.image }/> 
                 </div>
                 </Grid>
            }

               </Grid>
        </Card>
             </Box>
           {
              open && pathname==="works" && 
              <ModalAdminWOrks activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}handleClose={handleClose} handleOpen={handleOpen} />  
           }
          {
              open && pathname==="text" && 
              <ModalAdminText activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}handleClose={handleClose} handleOpen={handleOpen} />  
           }

           {
              open && work.type==="exhibiciones" && 
              <ModalAdminExhibitions activeWorks={activeWorks} activeImage={localActiveImage} handleClose={handleClose} handleOpen={handleOpen}  inactiveWorks={inactiveWorks}/>  
           }

            {
              open && work.type==="portfolio" &&                 
              <ModalAdminPortfolio activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks} handleClose={handleClose} handleOpen={handleOpen} />  

            }  
            {
              open && pathname==="bio" &&                 
              <ModalAdminBio  activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks} handleClose={handleClose} handleOpen={handleOpen} />  

            }  
    
        </>)
}
export default CardAdminActivity