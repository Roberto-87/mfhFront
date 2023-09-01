import { Box, Button, Modal,Switch } from "@mui/material"
import { useState } from "react";
import { style } from "../../admin/[works]/styleMui";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL, BIO } from "../../../utils/consts";
import validation from "../FormUploadWork/validation";
import styleModal from './ModalAdminBio.module.css'

const ModalAdminBio=({activeWorks, inactiveWorks,activeImage,handleClose, handleOpen})=>{
    const [open, setOpen] = useState(false);
    const [editWork, setEditWork] = useState(false);
    const [activeImageData, setActiveImageData]=useState({})
    const [inActiveImageData, setInActiveImageData]=useState({})
    const[error, setError]=useState({})

    useEffect(()=>{
      
        if(activeWorks){
            const activeWork= activeWorks?.find((work)=> work.id===activeImage)
           console.log(activeWork)
            setActiveImageData({id:activeWork.id, title: activeWork.title, subtitle:activeWork.subtitle,image:activeWork.image,text: activeWork.text, status:activeWork.status})
        }else if(inactiveWorks) {
            const inActiveWork= inactiveWorks?.find((work)=> work.id===activeImage)
            setInActiveImageData({id:inActiveWork.id,title: inActiveWork.title, subtitle:inActiveWork.subtitle, image:inActiveWork.image, text: inActiveWork.text, status:inActiveWork.status  })
        } 
       setOpen(!open);
    },[activeImage])


    const onHandleEdit=()=>{
        setEditWork(true)
    }

    const onHandleEditWork=(e)=>{
        setActiveImageData({...activeImageData, [e.target.name]:e.target.value})
        setInActiveImageData({...inActiveImageData, [e.target.name]:e.target.value})
    }
    const onHandleCancel=()=>{
      console.log(editWork)
      setEditWork(false)
    }



    const onHandleSave=async(event)=>{
       try {
        event.preventDefault()

         const  {id,title, text, number, status}  = activeImageData
         if(!id || !title|| !text || !number || !status )throw new Error('faltan datos obligatorios')
         const response= await axios.put(`${BASE_URL}${BIO}/edit`,activeImageData ) 
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
    <Box sx={style}>
    <div>
    <Button onClick={handleClose} style={{color:'gray', position:'absolute', right:'100%', top:'0%', fontSize:'1em'}}>CERRAR</Button>
   {activeImageData.image && <embed src={activeImage} alt="imagen obra" style={{marginTop:'3%'}} width={500} height={450}/>}
    <div>
    {activeImageData.status===true && <Button onClick={onHandleEdit}>Edit</Button>}

    <div>
    </div>
    </div>

    {activeImageData.status === true && !editWork && (
  <div>
    <strong>Title:</strong> {activeImageData.title}
    <br />
    <strong>Subtitle:</strong> {activeImageData.subtitle}
    <br />
    <strong>Status:</strong> {activeImageData.status && 'true'}
    <br />
    <strong>Number:</strong> {inActiveImageData.number}
    <br />
    <strong>Text:</strong>
    <div className={styleModal.scroller}>
      <p style={{overflow: 'auto'}}>{activeImageData.text}</p>
    </div>
  </div>
)}

{activeImageData.status===true && editWork===true &&    <form>
       <strong>Title:</strong><input type="text" name='title' onChange={onHandleEditWork} value={activeImageData.title}/> 
       <br />
       <strong>Subtitulo:</strong><input type="text" name='subtitle' onChange={onHandleEditWork} value={activeImageData.subtitle}/> 
       <br />
       <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       <strong>Number:</strong><input type="number" name='number' onChange={onHandleEditWork} value={activeImageData.number}/> 
       <br />
       <strong>Text:</strong><input type="text" name='text' onChange={onHandleEditWork} value={activeImageData.text}/> 
       <br />
       <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={onHandleCancel} className="text-sm font-semibold leading-6 text-gray-900"  >
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
{inActiveImageData.status===false && !editWork &&   <div>
       <strong>Title:</strong> {inActiveImageData.title}
       <br />
       <strong>Status:</strong> {inActiveImageData.status && 'false'} 
       <br />
       <strong>Subtitle:</strong> {inActiveImageData.subtitle}
       <br />
       <strong>Text:</strong> {inActiveImageData.text}
       <br />
       <strong>Number:</strong> {inActiveImageData.number}
       <br />
       </div>
}
    </div>
    </Box>
    </Modal> 
    )
}
export default ModalAdminBio

