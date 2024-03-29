import { Box, Button, Card, Grid, Modal,Switch } from "@mui/material"
import { useState } from "react";
import { styleModalExhibition } from "../../admin/[works]/styleMui";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL, EXHIBITIONS } from "../../../utils/consts";
import validation from "../FormUploadExhibition/validation";
import { searchExhibitionFromImage } from "./searchExhibitionFromImage";
import {MdOutlineRefresh} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import notFoundImage from '../../assets/no-image-available-icon-vector-id1216251206-568614111.jpg'
import { uploadNewImage } from "./uploadNewImage";
import LoaderAnimation from "../LoaderAnimation/LoaderAnimation";
import swal from "sweetalert";
import getData from "../../hooks/getData";



const ModalAdminExhibitions=({activeWorks, inactiveWorks,activeImage, handleClose, handleOpen})=>{
    const [open, setOpen] = useState(false);
    const [editWork, setEditWork] = useState(false);
    const [activeImageData, setActiveImageData]=useState({})
    const [inActiveImageData, setInActiveImageData]=useState({})
    const[error, setError]=useState({})
    const[updatedImages, setUpdatedImages]= useState()
    const [refresh, setRefresh]= useState(false)
    const [updated, setUpdated]= useState(false)
    const [newImage, setNewImage]= useState(false)
    const[uploadFiles, setUploadFiles]=useState()
    const[urlCloudNewImages, setUrlCloudNewImages]=useState([])
    const[upload, setUpload]= useState(false)
    const[idToUpload, setIdToUpload]=useState()


  useEffect(() => {
    const validate = async () => {
      const validationError = await validation({number:activeImageData.number});
      setError(validationError);
    };    
    validate();
  }, []);

    useEffect(()=>{
        if(activeWorks){
          const activeExhibition= searchExhibitionFromImage(activeWorks,activeImage)
          setActiveImageData(activeExhibition)

        }else if(inactiveWorks) {
         const inactiveExhibition= searchExhibitionFromImage(inactiveWorks,activeImage)
         setInActiveImageData(inactiveExhibition)
        }
       setOpen(!open);
       setRefresh(false)
    },[activeImage,refresh])

    
    useEffect(() => {
      if (updatedImages && updated) {
        const updateExhibition = async () => {
          try {
            const response = await axios.put(`${BASE_URL}exhibitions/edit`, updatedImages);
            if(!response) throw new Error('error al subir los datos')
            console.log('response from the client:', response);
          } catch (error) {
            console.error('Upload error:', error);
          }
        };
    
        updateExhibition();
      }
    }, [updatedImages, updated]);
    

    const onHandleEditWork=(e)=>{
        setActiveImageData({...activeImageData, [e.target.name]:e.target.value})
        setInActiveImageData({...inActiveImageData, [e.target.name]:e.target.value})
    }

    const onHandleImage=async(image)=>{
      try {
        const inactiveImageExhibition= searchExhibitionFromImage(activeWorks,image)
        const arrExcludingImage= inactiveImageExhibition.images.filter((img)=> img!==image)
        const updatedExhibition = {
          ...inactiveImageExhibition ,['images']:arrExcludingImage
        }; 
         setUpdatedImages(updatedExhibition); 
         setUpdated(true)

         const response= await axios.put(`${BASE_URL}exhibitions/edit`,updatedImages )     
         if(!response) throw new Error('error al subir los datos')  
         console.log('response from the client:', response);
      }
      catch (error) {
        console.error('Upload error:', error);    
       };  
 
    }
    const onHandleRefresh=()=>{
      setRefresh(true)
    }


  const onHandleEdit=()=>{
      setEditWork(true)
  }

  const onHandlenewFiles=(event)=>{
    const files=event.target.files
    setUploadFiles(files)

  }
  const onHandleNewImage=async(id)=>{
    setUpload(true)
    setIdToUpload(id)
    const uploadToCloud= await uploadNewImage(uploadFiles)
   
    if(uploadToCloud){
      setUpload(false)
      swal('Imagen subida exitosamente al cloud')
    }
    setUrlCloudNewImages(uploadToCloud)
  }
  
  
  const onHandleConfirm=async()=>{
    try {
      const updateImages=[]
      const {data}= await axios (`${BASE_URL}exhibitions/${idToUpload}`)
      const oldImages= data.map((img)=>img.images)
      updateImages.push(...oldImages, urlCloudNewImages)
      const newData= {...data}
      newData[0]['images']= updateImages.flat(1)
      console.log(newData)
      const response= await axios.put(`${BASE_URL}exhibitions/edit`,newData['0'] ) 
      if(!response) throw new Error('error al subir los datos')
      if(response){
        swal('Cambios guardados exitosamente')
        setUploadFiles('')
        setNewImage(false)
      }
      
    } catch (error) {
      console.error('Upload error:', error);
    }
  }

  useEffect(()=>{

 
    },[updatedImages,activeImageData,refresh])

    const onHandleSave=async(event)=>{
       try {
        event.preventDefault()
         const  {type,place,date, id,images, number,status, exhibitionName }  = activeImageData
         if(!type || !place  ||!date ||!id ||!images || !number || !status || !exhibitionName )throw new Error('faltan datos obligatorios')
         const response= await axios.put(`${BASE_URL}exhibitions/edit`,activeImageData ) 
         if(!response) throw new Error('error al subir los datos')
        if(response.status===200){
          swal("Cambios guardados exitosamente");
        }      
        else {
          swal("Hubo un error al subir la obra ");
        } 
        console.log('response from the client:', response);
        }
       catch (error) {
        console.error('Upload error:', error);    
    };    
    }
    return(
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
                >
    <Box sx={styleModalExhibition}>
   <AiOutlinePlus fontSize="1.5rem" onClick={()=>setNewImage(true)} ></AiOutlinePlus>
   
    <div>
    <Button onClick={handleClose} style={{color:'gray', position:'absolute', right:'100%', top:'0%', fontSize:'1em'}}>CERRAR</Button>
     <Grid style={{display:"flex"}}>

{activeImageData.status  ? activeImageData?.images.map((e,index)=>

<Grid style={{ marginTop: '1%', width: '40%', display: 'grid', margin: '2px', flexWrap: 'wrap',  gridTemplateColumns: 'repeat(auto-fill, 65px)', justifyContent: 'center',
    gap: '5px',
  }} key={e.index} >
    <Switch  defaultChecked onChange={()=>onHandleImage(activeImageData.images[index])}/>
  <img src={e || notFoundImage}  alt="imagen exhibicion" style={{marginTop:'1%'}} width={65} height={65}/>
  </Grid> 

  )
:

inActiveImageData.status===false && inActiveImageData?.images.map((e,index)=><img key={e.index} src={e || notFoundImage} alt="imagen exhibicion" style={{marginTop:'1%'}} width={150} height={200}/>)
}
</Grid>
<MdOutlineRefresh onClick={onHandleRefresh} fontSize="1.5rem" cursor='pointer' /> 
    
    <div>
   {activeImageData.status===true && <Button onClick={onHandleEdit}>Edit</Button>}
    <div>
    </div>
    </div>
{ activeImageData.status===true && !editWork &&   <div>
       <strong>Exhibition Name:</strong> {activeImageData.exhibitionName}
       <br />
       <strong>Id:</strong> {activeImageData.id}
       <br />
       <strong>Place:</strong> {activeImageData.place}
       <br />
       <strong>Date:</strong> {activeImageData.date}
       <br />
       <strong>Type:</strong> {activeImageData.type}
       <br />
       <strong>Number:</strong> {activeImageData.number}

       <br />
       <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       </div>

}
<div>

{newImage &&  
<div>
      <input id="file-upload" onChange={onHandlenewFiles}  multiple name="file-upload" type="file" className="sr-only"/> 
      <button onClick={()=>onHandleNewImage(activeImageData.id)}> upload to cloud</button>
      <button onClick={()=>onHandleConfirm(activeImageData.id)}> Save</button>{/* hace el put */}
</div>
} 
{
upload===true  && 
<div style={{backgroundColor:'white', color:'black', position:'fixed', bottom:'25%',alignItems:'center', width:'35%', height:'40%', paddingBottom:'1%',borderRadius:'0.5%'}}>
<LoaderAnimation></LoaderAnimation>
<p style={{marginLeft:'45%'}}>Subiendo...</p>
</div>                 
}


</div>
{activeImageData &&  activeImageData.status===true && editWork===true &&    <form>
       <strong>Exhibition Name:</strong><input type="text" name='exhibitionName' onChange={onHandleEditWork} value={activeImageData.exhibitionName}/> 
       <br />
       <strong>Id:</strong> {activeImageData.id}
       <br />
       <strong>Place:</strong><input type="text" name='place' onChange={onHandleEditWork} value={activeImageData.place}/> 
       <br />
       <strong>Date:</strong> <input type="text" name='date' onChange={onHandleEditWork} value={activeImageData.date}/> 
       <br />
       <strong>Type:</strong> {activeImageData.type}
       <br />
       <strong>Number:</strong> <input type="text" name='number' onChange={onHandleEditWork} value={activeImageData.number}/> 
       {error && error.number && <p>{error.number}</p>}
       <strong>Status:</strong> {activeImageData.status && 'true'} 

       <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={()=> setEditWork(false)} className="text-sm font-semibold leading-6 text-gray-900"  >
          Cancel
        </button>
        <button
          type="submit"
          onClick={onHandleSave}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    }

{inActiveImageData &&  inActiveImageData.status===false  &&   <div>
       <strong>Exhibition Name:</strong> {inActiveImageData.exhibitionName}
       <br />
       <strong>Id:</strong> {inActiveImageData.id}
       <br />
       <strong>Place:</strong> {inActiveImageData.place}
       <br />
       <strong>Date:</strong> {inActiveImageData.date}
       <br />
       <strong>Type:</strong> {inActiveImageData.type}
       <br />
       <strong>Number:</strong> {inActiveImageData.number}
       <br />
       <strong>Status:</strong> False
       <br />
       </div>
}

    </div>
    </Box>
    </Modal> 
    )
}
export default ModalAdminExhibitions