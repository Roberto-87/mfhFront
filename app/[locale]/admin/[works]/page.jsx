'use client'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormUploadWork from '../../components/FormUploadWork';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../../components/Loader';
import getData from "../../hooks/getData";
import Image from "next/image";
import { Button, Card, Modal,Typography } from "@mui/material";
import tr from "date-fns/esm/locale/tr/index.js";

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  height:600,
  width: 1000,
  bgcolor: 'black',
  boxShadow: 24,
  display:'flex',
  justifyContent:'center'
    
};

const Works = () => {  
    const router = useRouter();
    const { status } = useSession()
    const [inActiveWorks,setInActiveWorks]= useState()
    const [activeWorks, setActiveWorks]= useState()
    const[activeImage, setActiveImage]= useState()
    const [open, setOpen] = useState(false);
    const [activeImageData, setActiveImageData]=useState({type:'',format:'',image:'',material:'', number:0, size:'', status:true, title:'', year:''})
    
    
      if (status === 'unauthenticated') {
         router.push('/works'); 
        } 
    
        useEffect(() => {
          const fetchData = async () => {
            const allWorksAdmin = await getData('works');
            const inactiveWorks= allWorksAdmin.filter((work)=> work.status!==true)
            setInActiveWorks(inactiveWorks);
            const activeWorks= allWorksAdmin.filter((work)=> work.status===true)
            setActiveWorks(activeWorks)
          };      
          fetchData();  
        }, []);

        const handleOpen = (e) => {
          const activeImage= e.target["data-loaded-src"]
          const activeWork= activeWorks.find((work)=> work.image===activeImage)
          console.log(activeWork)
          setActiveImage(activeImage) 
          setActiveImageData({type:activeWork.folder, format:activeWork.format,image:activeWork.image, material:activeWork.material, number: activeWork.number, size: activeWork.size, status:activeWork.status , title: activeWork.title, year:activeWork.year })
          setOpen(true);
        }   


      if (status === 'loading') {
      return <Loader></Loader>;
    }
    
    const handleClose=()=>{
      setOpen(false)
    }
  


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
 

if(status==='authenticated'){
  return (
    
    <Box sx={{ flexGrow: 3, alignContent: "center", marginLeft: "4px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{width:'100%', paddingTop:'4px'}}>
          <Grid item xs={8}  container spacing={1} sx={{ marginTop: "6px", display:'flex', justifyContent:'center' }}>
    
          </Grid>
        </Grid>
        <Box >
            <h2 style={{textAlign:'center'}}>Obras activas</h2>
          <Grid sx={{display:'flex', justifyContent:'center', gap:'4px'}}>
            {activeWorks ? activeWorks?.map((work)=> <Card style={{padding:'1%', display:'flex', justifyContent:'center', cursor:'pointer'}} key={work.id}><Image alt={work.title} onClick={handleOpen} width={65} height={70}  src={work.image}/></Card>)
            : <p>No hay Obras activas actualmente</p>
          }
     
      
      {activeImage && 
            <Modal
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                                 >
                     <Box sx={style}>
          <div>
                    <Button onClick={handleClose} style={{color:'gray', position:'absolute', right:'100%', top:'0%', fontSize:'1em'}}>CERRAR</Button>
                   <Image src={activeImage} alt="imagen obra"  width={300} height={300}/>
                   <div>
                    <Button>Edit</Button>
                    <Button>Change status</Button>
                   </div>
                <div>
                        <strong>Title:</strong> {activeImageData.title}
                        <br />
                        <strong>Format:</strong> {activeImageData.format}
                        <br />
                        <strong>Type:</strong> {activeImageData.type}
                        <br />
                        <strong>Material:</strong> {activeImageData.material}
                        <br />
                        <strong>Number:</strong> {activeImageData.number}
                        <br />
                        <strong>Size:</strong> {activeImageData.size}
                        <br />
                        <strong>Status:</strong> {activeImageData.status && 'true'} 
                        <br />
                        <strong>Year:</strong> {activeImageData.year}
                        <br />
                        <strong>URL:</strong> {activeImageData.image}
                        <br />
                 </div>
                  </div>
                    </Box>
                   </Modal> 
      
}      
          </Grid>
        </Box>
        <Box >
            <h2 style={{textAlign:'center'}}>Obras inactivas</h2>
          <Grid sx={{display:'flex', justifyContent:'center', gap:'4px'}}>
            {inActiveWorks?.length ? inActiveWorks?.map((work)=> <Card key={work.id}><Image style={{padding:'1%', display:'flex', justifyContent:'center', cursor:'pointer'}}  width={65} height={60} alt={work.title}  src={work.image}/></Card> )
            : <p><i>No hay obras inactivas actualmente</i></p>
          }
          </Grid>
        </Box>
          

        <Box >

            <h2 style={{textAlign:'center'}}>Subir nueva obra</h2>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Item sx={{width:'60%', display:'flex', justifyContent:'center'}}>
  <FormUploadWork></FormUploadWork>
            </Item>

            </Box>


        </Box>
      
      </Box>

);
}



  
};

export default Works;
