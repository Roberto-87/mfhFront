'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  validation from './validation';
import swal from 'sweetalert';
import { BASE_URL } from '../../../utils/consts';
import { PORTFOLIO } from '../../../utils/consts';

export default function FormUploadPortfolio({img}) {
  const[form, setForm]= useState({image:img, comment:'', date:'', status:false,language:'', type:'portfolio'})
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
      console.log(errorCheck)
      setErrorCheck(!(Object.values(validationError).length === 0));
    };
    validate();
  }, [form,upload]);


  const handleUpload = async (event) => {
    event.preventDefault()   
      try {
      const  { comment, date, status,language, type} = form
      if(!date || !status|| !language || !type )throw new Error('faltan datos obligatorios')
      console.log(form)
      const response= await axios.post(`${BASE_URL}${PORTFOLIO}`,form ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({comment:'', date:'', status:false,language:'', image:'',type:''})

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
  setForm({image:img, comment:'', date:'', status:false, type:''})
}
 return (
      <form encType='multipart/form-data'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
  
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


            <div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
         date
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



      <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
Idioma
              </label>

                <select
                  id="language"
                  onChange={handleFormData}
                  name="language"
                  value={form.language}
                  autoComplete="status"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="False" defaultValue></option>
                  <option value="Español">Español</option>
                  <option value="Ingles">Ingles</option>
                       </select>

           { error && error.language && <p>{error.language}</p>}

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
                  <option value="portfolio">portfolio</option>
                          </select>

           { error && error.type && <p>{error.type}</p>}


           <div className="sm:col-span-3">
                <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                
                  comentario opcional
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleFormData}
                  onFocus={handleFormData}
                  value={form.comment}
                  name= 'comment'
                  id="comment"
                  autoComplete="comment"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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