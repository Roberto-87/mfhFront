'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from './validation';
import swal from 'sweetalert';
import {AiFillCheckCircle} from 'react-icons/ai'
import { BASE_URL } from '../../../utils/consts';

export default function FormWorksUpload2({img}) {
  const[form, setForm]= useState({image:img, title:'', material:'',size:'',number:0,year:'',section:'', status:false})
  const[error, setError]=useState({})
  const [errorCheck, setErrorCheck] = useState(false);
  const [inputTouched, setInputTouched] = useState();
  const [upload, setUpload] = useState();

  const handleFormData =async (event) => {
    setForm({...form, [event.target.name]:event.target.value})
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
        const  {image, title, material,size,number,year,section, status}  = form
  
      if(!title || !material ||!size ||!number ||!year ||!section || !status )throw new Error('faltan datos obligatorios')
      const response= await axios.post(`${BASE_URL}works`,form ) 
      console.log('response from the client:', response);
      setForm({image:'', title:'', material:'',size:'',number:0,year:'',section:'', status:false})

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
      console.error('Upload error:', error.response.data);    
  };
  };
const onHandleCancel=()=>{
  setForm({image:img, title:'', material:'',size:'',number:0,year:'',section:'', status:false})
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
                
                  Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleFormData}
                  onFocus={handleFormData}
                  value={form.title}
                  name= 'title'
                  id="title"
                  autoComplete="title-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 { error && error.title && <p>{error.title}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="material" className="block text-sm font-medium leading-6 text-gray-900">
         Material
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.material}
                  onChange={handleFormData}
                  name="material"
                  id="material"
                  autoComplete="material"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
           { error && error.material && <p>{error.material}</p>}
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">
         Size
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.size}
                  onChange={handleFormData}
                  name="size"
                  id="size"
                  autoComplete="size"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error && error.size && <p>{error.size}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
     Year
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleFormData}
                  value={form.year}
                  name="year"
                  id="year"
                  autoComplete="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {error && error.year && <p>{error.year}</p>}
              </div>
            </div>
            
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
           <div className="sm:col-span-3">
              <label htmlFor="section" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </label>
              <div className="mt-2">
                <select
                  id="section"
                  onChange ={handleFormData}
                  name="section"
                  value={form.section}
                  autoComplete="section-work"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                <option value="False" defaultValue></option>
                  <option value="obra">obra</option>
                       </select>
              </div>
            </div>   
          </div>
        </div>
        { error && error.section && <p>{error.section}</p>}
        <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                actividad
              </label>
              <div className="mt-2">
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

