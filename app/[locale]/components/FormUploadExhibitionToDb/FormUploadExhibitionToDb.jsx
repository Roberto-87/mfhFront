'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {AiFillCheckCircle} from 'react-icons/ai'
import { BASE_URL } from '../../../utils/consts';
import validation from '../FormUploadExhibition/validation';

export default function FormUploadExhibitionToDb({img}) {
    //img es un array
  const[form, setForm]= useState({images:img, exhibitionName:'', place:'',date:'',number:0,type:'', status:false, format:''})
  const[error, setError]=useState({})
  const [errorCheck, setErrorCheck] = useState(false);
  const [inputTouched, setInputTouched] = useState();

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
  }, [form]);


  const handleUpload = async (event) => {
    event.preventDefault()
      try {
        const  {images, exhibitionName, place,date,number,type, status, format}  = form
  
      if(!exhibitionName || !place ||!date ||!number ||!type || !status || !format)throw new Error('faltan datos obligatorios')
      const response= await axios.post(`${BASE_URL}exhibitions`,form ) 
      if(!response) throw new Error('error al subir los datos')
      console.log('response from the client:', response);
      setForm({images:'', exhibitionName:'', place:'',date:'',number:0,type:'', status:false, format:''})

      if(response.status!==200 && response.data==='llave duplicada viola restricción de unicidad «Works_number_key»'){
        swal("El número de la obra ya fue ingresado ");
      }
      if(response.status===200){
        swal("Exhibicion subida correctamente 😁");
      }      
      else {
        swal("Hubo un error al subir la exhibicion ");
      } 
       
    } catch (error) {
      console.error('Upload error:', error.response.data);    
  };
  };
const onHandleCancel=()=>{
  setForm({images:img, title:'', place:'',date:'',number:0,type:'', status:false, format:''})
}


  return (

    <form encType='multipart/form-data' >
      <div className="space-y-12" >
        <div className="border-b border-gray-900/10 pb-12">
  
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="exhibitionName" className="block text-sm font-medium leading-6 text-gray-900">
                
                  Exhibition Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={handleFormData}
                  onFocus={handleFormData}
                  value={form.exhibitionName}
                  name= 'exhibitionName'
                  id="exhibitionName"
                  autoComplete="exhibitionName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 { error && error.exhibitionName && <p>{error.exhibitionName}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">
         Place
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.place}
                  onChange={handleFormData}
                  name="place"
                  id="place"
                  autoComplete="place"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
           { error && error.place && <p>{error.place}</p>}
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
         Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={form.date}
                  onChange={handleFormData}
                  name="date"
                  id="date"
                  autoComplete="date"
                  placeholder='p.e: junio 2023'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error && error.date && <p>{error.date}</p>}
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
  {error && error.number && (
    <p style={{ color: 'red' }}>{error.number}</p>
  )}
  {error && !error.number && (
    <AiFillCheckCircle style={{ marginLeft: '5px' }} />
  )}
</div>
            </div>
           <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  onChange ={handleFormData}
                  name="type"
                  value={form.type}
                  autoComplete="type-work"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                <option value="False" defaultValue></option>
                  <option value="exhibiciones">exhibiciones</option>
                       </select>
              </div>
            </div>   
          </div>
        </div>
        { error && error.type && <p>{error.type}</p>}
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
                  <option value="False">False</option>
                       </select>
              </div>
            </div>   

      </div>
      { error && error.status && <p>{error.status}</p>}

      <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Formato
              </label>
              <div className="mt-2">
                <select
                  id="format"
                  onChange={handleFormData}
                  name="format"
                  value={form.format}
                  autoComplete="format"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="False" defaultValue></option>
                  <option value="Individual">Individual</option>
                  <option value="Colectiva">Colectiva</option>
                       </select>
              </div>
            </div>   

      { error && error.format && <p>{error.format}</p>}

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

