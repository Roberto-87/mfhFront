'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function FormWorksUpload2() {
  const[form, setForm]= useState({title:'', material:'', size:'',year:'', number:0,type:'obra',files:''})

  const handleFormData = (event) => {
    setForm({...form, [event.target.name]:event.target.value})
  };

  const handleUpload = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData();
      formData.append('file', form.files);
      formData.append('upload_preset', 'fiwvpzcu');
      formData.append('folder', 'Obras');
      //----------------------
      formData.append('date', form.year);
      formData.append('year', form.year);
      formData.append('material', form.material);
      formData.append('title', form.title);
       formData.append('type', form.type); 

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/mariaferrari/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    
  };
  };

  const onHandleClean=()=>{
    setForm(...form, form.files='')
  }


  return (
    <form>
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
                  value={form.title}
                  name= 'title'
                  id="title"
                  autoComplete="title-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
              </div>
            </div>
           <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Type
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  onChange={handleFormData}
                  name="type"
                  autoComplete="type-work"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option name='type' value={form.type}>obra</option>
                       </select>
              </div>
            </div>   
          </div>
        </div>

      </div>
      <div className="col-span-full">
         <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12  text-gray-300" style={{width:'50%'}} aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload"  name="files" value={form.files} onChange={handleFormData} type="file" className="sr-only" />
                 {form.files &&  <button onClick={onHandleClean}>clean</button>}
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleUpload}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

