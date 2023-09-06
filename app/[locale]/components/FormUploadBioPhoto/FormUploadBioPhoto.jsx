'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from '../FormUploadBioNoPhoto/validation';
import swal from 'sweetalert';
import { BASE_URL, BIO } from '../../../utils/consts';
import { Button } from '@mui/material';
import Link from 'next/link';
import {AiFillCheckCircle} from 'react-icons/ai'

export default function FormUploadBioPhoto({img}) {
    const[form, setForm]= useState({image:img, title:'', subtitle:'', text:'',type:'',number:0, status:false })
    const[error, setError]=useState({})
    const [errorCheck, setErrorCheck] = useState(false);
    const [inputTouched, setInputTouched] = useState();
    const [upload, setUpload] = useState();
    const [newForm, setNewForm]= useState(true)
    const [bioNoPhoto, setBioNoPhoto]= useState(false)
    
  const handleFormData =async (event) => {
      setForm({...form, [event.target.name]:event.target.value })
      setError(await validation({...form, [event.target.name]: event.target.value})) 
      setInputTouched({ ...inputTouched, [event.target.name]: true });
      
    };
    
    useEffect(() => {
        const validate = async () => {
            const validationError = await validation(form);
            setError(validationError);
            setErrorCheck(!(Object.values(validationError).length === 0));
        };
        validate();
        console.log(error)
    }, [form,upload]);
    
  
  const handleUpload = async (event) => {
    event.preventDefault()   
      try {

      const  {title, text,type, status } = form
      if(!title || !text ||  !type || !number || !status )throw new Error('faltan datos obligatorios')
 
      const response= await axios.post(`${BASE_URL}${BIO}`,form  ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({title:'',subtitle:'', text:'',type:'',number:0, status:false})

      if(response.status===200){
        swal("info subida correctamente 😁");
      }      
      else {
        swal("Hubo un error al subir la info ");
      } 
       
    } catch (error) {
      console.error('Upload error:', error.response);    
  };
  };
const onHandleCancel=()=>{
  setForm({image:'',title:'', subtitle:'', text:'', type:'',number:0, status:false})
  setNewForm(false)
}

return (
    <>
    {newForm &&
<form encType='multipart/form-data'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
         Título
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.title}
                  onChange={handleFormData}
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.title && <p>{error.title}</p>}
              </div>
            </div>    

           <div className="sm:col-span-3">
              <label htmlFor="subtitle" className="block text-sm font-medium leading-6 text-gray-900">
         Subtítulo opcional
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.subtitle}
                  onChange={handleFormData}
                  name="subtitle"
                  id="subtitle"
                  autoComplete="subtitle"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.subtitle && <p>{error.subtitle}</p>}
              </div>
            </div>  

                       <div className="sm:col-span-3">
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                      Texto
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.text}
                  onChange={handleFormData}
                  name="text"
                  id="text"
                  autoComplete="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.text && <p>{error.text}</p>}
              </div>
            </div> 

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
                    <option value="bio">Biografía</option>           
            </select>
           { error && error.type && <p>{error.type}</p>}
    
           <div className="sm:col-span-3">
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
     Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  onChange={handleFormData}
                  value={form.number}
                  name="number"
                  id="number"
                  autoComplete="number-work"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 { error && error.number ? <p style={{color:'red'}}>{error.number}</p>:  <AiFillCheckCircle style={{marginLeft:'5px'}}/>}

              </div>
            </div>
       
       
               <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
status
              </label>

                <select
                  id="status"
                  onChange={handleFormData}
                  name="status"
                  value={form.status}
                  autoComplete="status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
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

        <button 
        type="submit"
        disabled={errorCheck}
        onClick={handleUpload}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
       </div>
  
       </form>
       }
    

    </>
          )
}



