import { Box, Button, Modal,Switch } from "@mui/material"
import { useState } from "react";
import { style } from "../../admin/[works]/styleMui";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/consts";
import validation from "../FormUploadWork/validation";


const ModalAdminWOrks=({activeWorks, inactiveWorks,activeImage})=>{
    const [open, setOpen] = useState(false);
    const [editWork, setEditWork] = useState(false);
    const [activeImageData, setActiveImageData]=useState({})
    const [inActiveImageData, setInActiveImageData]=useState({})
    const[error, setError]=useState({})

    useEffect(()=>{
      
        if(activeWorks){
            const activeWork= activeWorks?.find((work)=> work.image===activeImage)
            setActiveImageData({type:activeWork.section,id:activeWork.id, format:activeWork.format,image:activeWork.image, material:activeWork.material, number: activeWork.number, size: activeWork.size, status:activeWork.status , title: activeWork.title, year:activeWork.year })
        }else if(inactiveWorks) {
            const inActiveWork= inactiveWorks?.find((work)=> work.image===activeImage)
            setInActiveImageData({type:inActiveWork.section, id:inActiveWork.id, format:inActiveWork.format,image:inActiveWork.image, material:inActiveWork.material, number: inActiveWork.number, size: inActiveWork.size, status:inActiveWork.status , title: inActiveWork.title, year:inActiveWork.year })
        }
       setOpen(!open);
    },[activeImage])

    useEffect(() => {
      const validate = async () => {
        const validationError = await validation({number:activeImageData.number});
        setError(validationError);
      };  
      validate();
    }, [activeImageData.number]);
  

    
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

         const  {id, image, title, material,size,number,year,type, status}  = activeImageData
         if(!id || !title || !material ||!size ||!number ||!year ||!type || !status || !image )throw new Error('faltan datos obligatorios')
         const response= await axios.put(`${BASE_URL}works/edit`,activeImageData ) 
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
    <img src={activeImage} alt="imagen obra" style={{marginTop:'6%'}} width={200} height={200}/>
    <div>
    {activeImageData.status===true && <Button onClick={onHandleEdit}>Edit</Button>}

    <div>
    </div>
    </div>
{activeImageData.status===true && !editWork &&   <div>
       <strong>Title:</strong> {activeImageData.title}
       <br />
    <strong>Id:</strong> {activeImageData.id}
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
}
{activeImageData.status===true && editWork===true &&    <form>
       <strong>Title:</strong><input type="text" name='title' onChange={onHandleEditWork} value={activeImageData.title}/> 
       <br />
       <strong>Id:</strong> {activeImageData.id}
       <br />
       <strong>Type:</strong> {activeImageData.type}
       <br />
       <strong>Material:</strong><input type="text" name='material' onChange={onHandleEditWork} value={activeImageData.material}/> 
       <br />
       <strong>Number:</strong> <input type="number" name='number' onChange={onHandleEditWork} value={activeImageData.number}/> 
             {error && error.number && <p>{error.number}</p>}
       <br />
       <strong>Size:</strong> <input type="text" name='size' onChange={onHandleEditWork} value={activeImageData.size}/> 
       <br />
       <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       <strong>Year:</strong> <input type="text" name='year' onChange={onHandleEditWork} value={activeImageData.year}/> 
       <br />
       <strong>URL:</strong> {activeImageData.image}
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
    <strong>Id:</strong> {inActiveImageData.id}
       <br />
       <strong>Type:</strong> {inActiveImageData.type}
       <br />
       <strong>Material:</strong> {inActiveImageData.material}
       <br />
       <strong>Number:</strong> {inActiveImageData.number}
       <br />
       <strong>Size:</strong> {inActiveImageData.size}
       <br />
       <strong>Status:</strong> {inActiveImageData.status && 'false'} 
       <br />
       <strong>Year:</strong> {inActiveImageData.year}
       <br />
       <strong>URL:</strong> {inActiveImageData.image}
       <br />
       </div>
}
{inActiveImageData.status===false && editWork===true &&    <form>
       <strong>Title:</strong><input type="text" name='title' onChange={onHandleEditWork} value={inActiveImageData.title}/> 
       <br />
       <strong>Id:</strong> {inActiveImageData.id}
       <br />
       <strong>Type:</strong> {inActiveImageData.type}
       <br />
       <strong>Material:</strong><input type="text" name='material' onChange={onHandleEditWork} value={inActiveImageData.material}/> 
       <br />
       <strong>Number:</strong> <input type="number" name='number' onChange={onHandleEditWork} value={inActiveImageData.number}/> 

       <br />
       <strong>Size:</strong> <input type="text" name='size' onChange={onHandleEditWork} value={inActiveImageData.size}/> 
       <br />
       <strong>Status:</strong> {inActiveImageData.status && 'true'} 
       <br />
       <strong>Year:</strong> <input type="text" name='year' onChange={onHandleEditWork} value={inActiveImageData.year}/> 
       <br />
       <strong>URL:</strong> {inActiveImageData.image}
       <br />
       <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button"  className="text-sm font-semibold leading-6 text-gray-900"  >
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
    </div>
    </Box>
    </Modal> 
    )
}
export default ModalAdminWOrks