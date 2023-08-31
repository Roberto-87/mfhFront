import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import getData from "../../hooks/getData";
import {MdOutlineRefresh} from 'react-icons/md'
import CardAdminActivity from "../CardAdminActivity/CardAdminActivity";
import putData from "../../hooks/putData";

const AdminActiveWorks=({title, fetchingData})=>{
    const [inActiveWorks,setInActiveWorks]= useState([])
    const [activeWorks, setActiveWorks]= useState([])
    const [refresh, setRefresh]= useState(false)

    useEffect(() => {
       const fetchData = async () => {
        let allWorksAdmin = await getData(fetchingData)
              if(allWorksAdmin.length>0){
          const inactiveWorks= allWorksAdmin?.filter((work)=> work.status!==true).sort((a,b)=>b.number-a.number)
          setInActiveWorks(inactiveWorks);
        }
        if(allWorksAdmin.length>0){
          const activeWorks= allWorksAdmin?.filter((work)=> work.status===true).sort((a,b)=>b.number-a.number)
          setActiveWorks(activeWorks)
        }
      };      
      fetchData();  
      setRefresh(false)
    }, [refresh, activeWorks, inActiveWorks ]);
  

    const onHandleSwitch = async (work) => {
      const newStatus = !work.status;     
      try {
        const id = work.id;  
        const response = await putData(`${fetchingData}/switchactivity/${id}`)
        console.log('Response from PUT request:', response);
  
        if (newStatus) {
          setInActiveWorks(inActiveWorks.filter((item) => item.id !== work.id));
          setActiveWorks([...activeWorks, work]);
        } else {
          setActiveWorks(activeWorks.filter((item) => item.id !== work.id));
          setInActiveWorks([...inActiveWorks, work]);
        }
      } catch (error) {
        console.error('Error in PUT request:', error);
      }
    };

    const onHandleRefresh=()=>setRefresh(true)


    return (    
        <Box   >
            <Grid container spacing={{ xs: 2, md: 3, lg:3 }} columns={{ xs: 4, sm: 8, md: 12, lg:3 }} sx={{width:'100%', paddingTop:'4px'}} >
              <Grid item xs={8}  container spacing={1} sx={{  display:'flex', justifyContent:'center' }}>
              </Grid>
            </Grid>
            <Box  >
        <div style={{display:'flex', justifyContent:'flex-end', marginRight:'25%'}}>
           <MdOutlineRefresh onClick={onHandleRefresh} fontSize="1.5rem" cursor='pointer' />
                   </div>
                <h2 style={{textAlign:'center'}}>{title} activas</h2>

              <Grid sx={{display:'flex', justifyContent:'center', gap:'4px',width:'50%', marginLeft:'25%'}}>
                {activeWorks.length>0 ? activeWorks?.map((work, index)=> <CardAdminActivity onHandleSwitch={onHandleSwitch} activeWorks={activeWorks} index={index}  work={work} key={index}/>  )
                : <p>No hay {title} activas actualmente</p>
              }                     
              </Grid>
            </Box>
            <Box >
                <h2 style={{textAlign:'center'}}>{title} inactivas</h2>
                <Grid sx={{display:'flex', justifyContent:'center', gap:'4px',width:'50%', marginLeft:'25%'}}>
               
                {inActiveWorks.length>0? inActiveWorks && inActiveWorks?.map((work, index)=>  <CardAdminActivity onHandleSwitch={onHandleSwitch} index={index} inactiveWorks={inActiveWorks}  work={work} key={index}/>  )
                : <p><i>No hay {title} inactivas actualmente</i></p>
              }
                  </Grid>
            </Box>
         </Box>    )
     }
   export default AdminActiveWorks    