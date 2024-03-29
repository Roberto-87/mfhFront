'use client'
import { useEffect,useState } from "react"
import { Box, Button} from "@mui/material";
import getData from "../../hooks/getData";
import { EXHIBITIONS, TEXT } from "../../../utils/consts";
import {comfortaa} from '../../fonts/fonts'
import ImageListExhibition from "../../components/ImageListExhibition/ImageListExhibition";
import ModalCuratorialText from "../../components/ModalCuratorialText/ModalCuratorialText";
import ExhibitionData from "../../components/ExhibitionData/ExhibitionData";
import LoaderAnimation from "../../components/LoaderAnimation/LoaderAnimation";
import LoadingBar from 'react-top-loading-bar'
import BackToStart from "../../components/BackToStart/BackToStart";
import { LiaAngleUpSolid } from "react-icons/lia"


const Exhibition=({params })=>{
  const {id}= params
  const [progress, setProgress] = useState(0)
   const[exhibitionText,setExhibitionText]= useState({document:'', title:'', author:''})
   const[exhibition,setExhibition]= useState('')
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const[imageLoaded, setImageLoaded]= useState(false)

   
   const handleOpen = () => {
       setOpen(true);
       setProgress(progress + 10)
  }
   const handleClose = () => {
    setOpen(false)
    setProgress(progress + 10)
  };

  const onHandleLoad=()=>{
    setImageLoaded(true)
   }

  useEffect(() => { 
    setLoading(true)
    const fetchDataExhibition = async () => {
      const actualExhibition = await getData(`${EXHIBITIONS}/${id}`);
      setExhibition(actualExhibition[0]);
      const curatorialTexts= await getData(`${TEXT}/curatorial`)
      const actualCuratorial= curatorialTexts.find((text)=> text.exhibitionId===id && text.status===true) 
      
      if(actualCuratorial){
        setExhibitionText({['document']:actualCuratorial.image, ['title']:actualCuratorial.title, ['author']:actualCuratorial.author })
      }
    };   
    fetchDataExhibition();  
    setLoading(false)
    setProgress(100)
  }, []);
     
    return ( 
      <Box sx={{paddingRight:'1%',paddingLeft:'1%'}}>  
        <LoadingBar  color='black'progress={progress}  />
    <ExhibitionData exhibition={exhibition} /> 
    {exhibitionText.document && 
     <div style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
        <Button className={comfortaa.className} style={{color:'black',margin:'1px', paddingTop:'2px'}} onClick={handleOpen}><i>texto curatorial</i></Button>
     </div>    
    } 
    {open && <ModalCuratorialText progress={progress} exhibitionText={exhibitionText} open={handleOpen} onClose={handleClose}/>}  
    <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
    <ImageListExhibition exhibition={exhibition} />
     </div>

   </Box>
   )
}
export default Exhibition