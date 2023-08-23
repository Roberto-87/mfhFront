import { Box, Button, Modal,Switch } from "@mui/material"
import { useState } from "react";
import { style } from "../../admin/[works]/styleMui";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL, PORTFOLIO } from "../../../utils/consts";
import validation from "../FormUploadWork/validation";


const ModalAdminPortfolio=({activeWorks, inactiveWorks,activeImage})=>{
    const [open, setOpen] = useState(false);
    const [editWork, setEditWork] = useState(false);
    const [activeImageData, setActiveImageData]=useState({})
    const [inActiveImageData, setInActiveImageData]=useState({})
    const[error, setError]=useState({})

    useEffect(()=>{
      
        if(activeWorks){
            const activeWork= activeWorks?.find((work)=> work.image===activeImage)
            setActiveImageData({id:activeWork.id, comment: activeWork.comment, date:activeWork.date,image:activeWork.image,language: activeWork.language, status:activeWork.status})
        }else if(inactiveWorks) {
            const inActiveWork= inactiveWorks?.find((work)=> work.image===activeImage)
            setInActiveImageData({id:inActiveWork.id,comment: inActiveWork.comment, date:inActiveWork.date, image:inActiveWork.image, language: inActiveWork.language, status:inActiveWork.status  })
        }
       setOpen(!open);
    },[activeImage])


    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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

         const  {id,comment, date, image, language, status}  = activeImageData
         if(!id || !date|| !image || !language || !status )throw new Error('faltan datos obligatorios')
         const response= await axios.put(`${BASE_URL}${PORTFOLIO}/edit`,activeImageData ) 
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
    <embed src={activeImage} alt="imagen obra" style={{marginTop:'6%'}} width={200} height={200}/>
    <div>
    {activeImageData.status===true && <Button onClick={onHandleEdit}>Edit</Button>}

    <div>
    </div>
    </div>
{activeImageData.status===true && !editWork &&   <div>
       <strong>Fecha:</strong> {activeImageData.date}
       <br />
        <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       <strong>Idioma:</strong> {activeImageData.language}
    
       <br />
       <strong>Comentario opcional:</strong> {activeImageData.comment}
       <br />
       </div>
}
{activeImageData.status===true && editWork===true &&    <form>
       <strong>Fecha:</strong><input type="text" name='date' onChange={onHandleEditWork} value={activeImageData.date}/> 
       <br />
       <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       <strong>Idioma:</strong>
       <select
      id="language"
      onChange={onHandleEditWork}
      name="language"
      value={activeImageData.language}
      autoComplete="language"
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option value="False" defaultValue></option>
      
       <option  value={'Español'}>Español </option>
       <option  value={'Ingles'}>Ingles </option> 
      
    </select>
          
       <br />
       <strong>Comentario:</strong> <input type="text" name='comment' onChange={onHandleEditWork} value={activeImageData.comment}/> 
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
       <strong>Fecha:</strong> {inActiveImageData.date}
       <br />
       <strong>Status:</strong> {inActiveImageData.status && 'false'} 
       <br />
       <strong>Idioma:</strong> {inActiveImageData.language}
       <br />
       <strong>Comentario:</strong> {inActiveImageData.comment}
       <br />
       </div>
}
    </div>
    </Box>
    </Modal> 
    )
}
export default ModalAdminPortfolio