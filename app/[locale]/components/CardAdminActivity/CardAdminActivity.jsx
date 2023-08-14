import { Box, Card, Grid, Switch } from "@mui/material"
import { Item } from "../../admin/[works]/styleMui"
import { useState } from "react"
import ModalAdminWOrks from "../ModalAdminWorks/ModalAdminWorks"
import ModalAdminExhibitions from "../ModalAdminExhibitions/ModalAdminExhibitions"
import { useEffect } from "react"
import notFound from '../../assets/no-image-available-icon-vector-id1216251206-568614111.jpg'
 
const CardAdminActivity=({work,activeWorks, inactiveWorks, index, onHandleSwitch})=>{
    const[activeImage, setActiveImage]= useState()
    const [open, setOpen] = useState(false);
    const [localActiveImage, setLocalActiveImage] = useState(null);

    const handleOpen = (e) => {
           const activeImage = e.target.currentSrc;
           setLocalActiveImage(activeImage);  
           setActiveImage(activeImage)
           setOpen(true);
       };
   
   
    return(
        <>
        <Card style={{ display:'flex', justifyContent:'center', cursor:'pointer', backgroundColor:'transparent', width:'100%'}} key={work.id}>
          <Box sx={{ flexGrow: 3, alignContent: "center",  marginRight: "-15px"}}>
             <Grid item xs={8}  container spacing={1} style={{display:'flex', justifyContent:'center' }}>
           {  work.status===true &&   <Switch defaultChecked onChange={()=>onHandleSwitch(activeWorks[index])} /> }
           {  work.status===false &&   <Switch  onChange={()=>onHandleSwitch(inactiveWorks[index])} /> }
                 <Item>
               <img alt={work.title} onClick={handleOpen}  width={120} height={90} src={work.image }/>
         
           {work.exhibitionName &&  <img alt={work.title} onClick={handleOpen}  width={120} height={90} src={work.images[0] || notFound}/>}
            
            </Item>
               </Grid>
             </Box>
        </Card>
           {
              open && work.section==="obra" && 
              <ModalAdminWOrks activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  
           }

           {
              open && work.type==="exhibiciones" && 
              <ModalAdminExhibitions activeWorks={activeWorks} activeImage={localActiveImage} inactiveWorks={inactiveWorks}/>  
           }
    
        </>)
}
export default CardAdminActivity