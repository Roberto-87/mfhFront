'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from './validation';
import swal from 'sweetalert';
import { BASE_URL, CONTACT } from '../../../utils/consts';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function FormUploadBio() {
    const[form, setForm]= useState({description:'', type:'', link:'', status:false })
    const[error, setError]=useState({})
    const [errorCheck, setErrorCheck] = useState(false);
    const [inputTouched, setInputTouched] = useState();
    const [upload, setUpload] = useState();
    const [newForm, setNewForm]= useState(false)
    
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
      const  {description, type, link, status } = form
      if(!description|| !type || !link || !status )throw new Error('faltan datos obligatorios')
 
      const response= await axios.post(`${BASE_URL}${CONTACT}`,form ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({description:'', type:'', link:'', status:false})

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
  setForm({description:'', type:'', link:'',  status:false})
  setNewForm(false)
}
const onHandlerClick=()=>{
    setNewForm(true)
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
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
         Descripción
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.description}
                  onChange={handleFormData}
                  name="description"
                  id="description"
                  autoComplete="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.description && <p>{error.description}</p>}
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
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="snapchat">Snapchat</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                    <option value="mail">Correo electrónico</option>
                    <option value="telefono">Teléfono</option>    
                    <option value="tiktok">Tik tok</option>      
                    <option value="youtube">Youtube</option>             
            </select>
           { error && error.type && <p>{error.type}</p>}
         

<div className="sm:col-span-3">
              <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
         Link
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.link}
                  onChange={handleFormData}
                  placeholder='https://instagram.com'
                  name="link"
                  id="link"
                  autoComplete="link"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           {form.type==='whatsapp' && <p><i>→ Ejemplo de link a usuario de Whatsapp: https://wa.me/54911...</i> </p>}
           {form.type==='telegram' && <div> <Link style={{textDecoration:'underline'}} href={'https://uncomohacer.com/como-copiar-y-compartir-un-enlace-de-perfil-de-telegram-como-reconocer-un-enlace/?expand_article=1'}> Cómo compartir usuario de Telegram?</Link></div>
           }       
           { error && error.link && <p>{error.link}</p>}
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



