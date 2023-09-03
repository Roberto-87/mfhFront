'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from './validation';
import swal from 'sweetalert';
import { BASE_URL, COVER, EXHIBITIONS, TEXT } from '../../../utils/consts';
import getData from '../../hooks/getData';
import { Box } from '@mui/material';

export default function FormUploadCover({img}) {
    const[form, setForm]= useState({image:img,  type:'',  status:false })
    const[error, setError]=useState({})
    const [errorCheck, setErrorCheck] = useState(false);
    const [inputTouched, setInputTouched] = useState();
    const [upload, setUpload] = useState();
    const[exhibitionPaper, setExhibitionPaper]= useState(false)
    const [exhibitions, setExhibitions]= useState()
  
  const handleFormData =async (event) => {
      const exhibitionSelected= event.target.value
      setExhibitionPaper(exhibitionSelected )

      setForm({...form, [event.target.name]:event.target.value })

      setError(await validation({
          ...form, [event.target.name]: event.target.value
        })) 
        
      setInputTouched({ ...inputTouched, [event.target.name]: true });
 
    };
    
    useEffect(() => {
        const validate = async () => {
            const validationError = await validation(form);
            setError(validationError);
            setErrorCheck(!(Object.values(validationError).length === 0));
        };
        validate();
    }, [form,upload]);
    
    

  const handleUpload = async (event) => {
    event.preventDefault()   
      try {
      const  { type, status} = form
      if( !type|| !status )throw new Error('faltan datos obligatorios')
      
      const response= await axios.post(`${BASE_URL}${COVER}`,form ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({type:'', status:false})

        if(response.status===200){
        swal("Obra subida correctamente 😁");
      }      
      else {
        swal("Hubo un error al subir la obra ");
      } 
       
    } catch (error) {
      console.error('Upload error:', error);    
  };
  };
const onHandleCancel=()=>{
  setForm({image:img,  type:'',status:false})
}

return (
    <form encType='multipart/form-data'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
  
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo
              </label>

                <select
                  id="type"
                  onChange={handleFormData}
                  name="type"
                  value={form.type}
                  autoComplete="type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="False" defaultValue></option>
                  <option value="cover">Cover Image</option>
             </select>
           { error && error.type && <p>{error.type}</p>}

       <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                        status
              </label>

<select id="status" onChange={handleFormData} name="status" value={form.status} autoComplete="status" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option value="False" defaultValue></option>
                  <option value="True">True</option>
                  <option value="True">False</option>
    </select>
       </div>
   </div>   
</div>
{ error && error.status && <p>{error.status}</p>}

<div className="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={onHandleCancel}>
  Cancel
  </button>

     <button type="submit" disabled={errorCheck} onClick={handleUpload} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Save
     </button>
 </div>
</form>
       )
}
