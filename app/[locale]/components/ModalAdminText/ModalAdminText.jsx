import { Box, Button, Modal } from "@mui/material"
import { useState } from "react";
import { style } from "../../admin/[works]/styleMui";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL, EXHIBITIONS, TEXT } from "../../../utils/consts";
import validation from "../FormUploadWork/validation";
import getData from "../../hooks/getData";
import { imageFormat } from "../../../utils/functions";


const ModalAdminText=({activeWorks, inactiveWorks,activeImage,handleClose, handleOpen})=>{
    const [open, setOpen] = useState(false);
    const [editWork, setEditWork] = useState(false);
    const [activeImageData, setActiveImageData]=useState({})
    const [inActiveImageData, setInActiveImageData]=useState({})
    const[error, setError]=useState({})
    const [exhibitions, setExhibitions]=useState()
   
    useEffect(()=>{
        if(activeWorks){
          console.log(activeImage)
            const activeWork= activeWorks?.find((work)=> work.image===activeImage)
            setActiveImageData({type:activeWork.type,id:activeWork.id, format: activeWork.image.split('.').at(-1), author:activeWork.author,date:activeWork.date, exhibition:activeWork.exhibitionId, status:activeWork.status , title: activeWork.title })
     
          }else if(inactiveWorks) {
            const inActiveWork= inactiveWorks?.find((work)=> work.image===activeImage)
            setInActiveImageData({type:inActiveWork.type,id:inActiveWork.id, format: inActiveWork.image.split('.').at(-1),author:inActiveWork.author,date:inActiveWork.date, exhibition:inActiveWork.exhibitionId, status:inActiveWork.status , title: inActiveWork.title })
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
  

   const onHandleEdit=()=>{
        setEditWork(true)
    }

    const onHandleEditWork=async(e)=>{
        setActiveImageData({...activeImageData, [e.target.name]:e.target.value})
        setInActiveImageData({...inActiveImageData, [e.target.name]:e.target.value})
        const response= await getData(EXHIBITIONS)
        setExhibitions(response)
   
    }
    const onHandleCancel=()=>{
      setEditWork(false)
    }



    const onHandleSave=async(event)=>{
       try {
        event.preventDefault()
         const  {id, author, date, exhibition,image,status,title, type}  = activeImageData
         console.log(activeImageData)
         if(!id || !author || !date  ||!status ||!title || !type)throw new Error('faltan datos obligatorios')
         const response= await axios.put(`${BASE_URL}${TEXT}/edit`,activeImageData ) 
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
   {
    activeImageData.status==='true'&&   activeImageData.format !=='pdf'?
       <div style={{width:'100%'}}>
        <img src={imageFormat(activeImage)} alt="imagen obra" style={{marginTop:'0.5%'}} width={400} height={300}/>
        </div>
        :
        <div style={{width:'100%',display:'flex', justifyContent:'flex-start'}}>
        <embed src={(activeImage)} alt="imagen obra" style={{marginTop:'4%'}} width={650} height={350}/>        </div>
   }


    <div>
    {activeImageData.status===true && <Button onClick={onHandleEdit}>Edit</Button>}

    <div>
    </div>
    </div>

{activeImageData.status===true && !editWork &&  
 <div>
    <strong>Id:</strong> {activeImageData.id}
       <br />
       <strong>Title:</strong> {activeImageData.title}
       <br />
       <strong>Author:</strong> {activeImageData.author}
       <br />
       <strong>Date:</strong> {activeImageData.date}
       <br />

        <div>
        <strong>Exhibition:</strong> {activeImageData.exhibition}
        </div>
       <strong>Status:</strong> {activeImageData.status && 'true'} 
       <br />
       <strong>Type:</strong> {activeImageData.type}
       <br />

   </div>
}
{/* {id, author, date, exhibitionId,image,status,title, type} */}
{activeImageData.status===true && editWork===true &&    <form>
       <strong>Title:</strong><input type="text" name='title' onChange={onHandleEditWork} value={activeImageData.title}/> 
       <br />
       <strong>Id:</strong> {activeImageData.id}
       <br />
       <strong>Type:</strong> {activeImageData.type}
       <br />
       <strong>Author:</strong><input type="text" name='author' onChange={onHandleEditWork} value={activeImageData.author}/> 
       <br />
       <strong>Date:</strong> <input type="text" name='date' onChange={onHandleEditWork} value={activeImageData.date}/> 
       <br />
    {activeImageData.type==='curatorial' &&   
    <div>
    <strong>Exhibition:</strong> 
    <select
      id="exhibition"
      onChange={onHandleEditWork}
      name="exhibition"
      value={activeImageData.exhibition}
      autoComplete="exhibition"
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option value="False" defaultValue></option>
      { 
        exhibitions && exhibitions.map((exhibition, index) => (
       
       <option key={index} value={exhibition.id}>
              {exhibition.exhibitionName} 
          </option>
        ))
      }
    </select>
    </div>
      }
       <strong>Status:</strong> {activeImageData.status && 'true'} 
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
    <strong>Id:</strong> {inActiveImageData.id}
       <br />
       <strong>Title:</strong> {inActiveImageData.title}
       <br />
       <strong>Author:</strong> {inActiveImageData.author}
       <br />
       <strong>Date:</strong> {inActiveImageData.date}
       <br />

    <div>
    <strong>Exhibition:</strong> {inActiveImageData.exhibition}
    </div>

       <br />
       <strong>Status:</strong> {inActiveImageData.status && 'true'} 
       <br />
       <strong>Type:</strong> {inActiveImageData.type}
       <br />
       </div>
}

    </div>
    </Box>
    </Modal> 
    )
}
export default ModalAdminText