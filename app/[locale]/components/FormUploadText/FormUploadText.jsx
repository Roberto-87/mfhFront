'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from './validation';
import swal from 'sweetalert';
import { BASE_URL, EXHIBITIONS, TEXT } from '../../../utils/consts';
import getData from '../../hooks/getData';
import { Box } from '@mui/material';

export default function FormUploadText({img}) {
    const[form, setForm]= useState({image:img, title:'', type:'', date:'', author:'',  status:false })
    const[error, setError]=useState({})
    const [errorCheck, setErrorCheck] = useState(false);
    const [inputTouched, setInputTouched] = useState();
    const [upload, setUpload] = useState();
    const[curatorial, setCuratorial]= useState(false)
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
        if (name === 'type' && value === 'curatorial') {
          setCuratorial(true);
        } else {
          setCuratorial(false);
        }
        setCuratorial(true)
        const response= await getData(EXHIBITIONS)
        setExhibitions(response)
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
      const  { title, type, date,author, status} = form
      if(!title || !type|| !date || !author || !status )throw new Error('faltan datos obligatorios')
      console.log(form)
      const response= await axios.post(`${BASE_URL}${TEXT}`,form ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({title:'', type:'', date:'',author:'', status:false})

      if(response.status!==200 && response.data==='llave duplicada viola restricción de unicidad «Works_number_key»'){
        swal("El número de la obra ya fue ingresado ");
      }
        if(response.status===200){
        swal("Obra subida correctamente 😁");
      }      
      else {
        swal("Hubo un error al subir la obra ");
      } 
       
    } catch (error) {
      console.error('Upload error:', error.response);    
  };
  };
const onHandleCancel=()=>{
  setForm({image:img, title:'', type:'', date:'', author:'', status:false})
}

return (
    <form encType='multipart/form-data'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
  
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
         title
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
                  <option value="curatorial">texto curatorial</option>
                  <option value="prensa">prensa</option>
            </select>
           { error && error.type && <p>{error.type}</p>}

           {
  form.type === 'curatorial' && (
    <Box>
    <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
Exhibición
              </label>
    <select
      id="exhibition"
      onChange={handleFormData}
      name="exhibition"
      value={form.exhibition}
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
    </Box>
  )
}

<div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
         Fecha
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.date}
                  onChange={handleFormData}
                  name="date"
                  id="date"
                  autoComplete="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.date && <p>{error.date}</p>}
              </div>
            </div>    
    
            <div className="sm:col-span-3">
              <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
         Autore
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.author}
                  onChange={handleFormData}
                  name="author"
                  id="author"
                  autoComplete="author"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
           { error && error.author && <p>{error.author}</p>}
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
       )
}