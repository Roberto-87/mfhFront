'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import FormWorksUpload2 from '../FormUploadWork/formWorksUpload2'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import FormUploadExhibitionToDb from '../FormUploadExhibitionToDb/FormUploadExhibitionToDb';

const FormUploadExhibition = ({title}) => {
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [urlImage, setUrlImage]= useState([])
   const [clean, setClean]= useState()
   const [handleUploadCClicked, setHandleUploadClicked]= useState(false)
   const [error, setError]= useState(false)
   const inputFileRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  }; 

   const handleUpload = async () => {   
     try {
    setHandleUploadClicked(true)
    const uploadedUrls = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'fiwvpzcu');
        formData.append('folder', 'Exhibiciones')


        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { secure: true } // Agregar esta línea
          }
        );
        uploadedUrls.push(response.data.url);
        if(!response) throw new Error('error al subir los datos')
        }
        setUrlImage((prevUrls) => [...prevUrls, ...uploadedUrls]);;
      }
      catch (error) {
      console.error('Upload error:', error);
      swal('Hubo un error en la carga de los archivos:\n',  error.response.data.error.message)
      setClean(true)
      setError(true)
      setUrlImage()
      setSelectedFiles([]);
      if (inputFileRef.current) {
        inputFileRef.current.value = '';
      }
          setHandleUploadClicked(false)
    }
    
  };  
  
  const handleClean = () => {
    setClean(true)
    setUrlImage()
    setSelectedFiles([]);
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
    setHandleUploadClicked(false)
  };

  return (

   <div style={{width:'98vw'}}>
     <div className="col-span-full" >
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              <h2>Upload new {title}</h2> 
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon  style={{width:'10%'}} className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" multiple name="file-upload" type="file" className="sr-only"  ref={inputFileRef}   onChange={handleFileSelect} />
                    </label>              <button onClick={handleClean}>Clear</button>
                    <p className="pl-1">or drag and drop</p>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
            {  selectedFiles.length> 0 &&    <button  onClick={handleUpload}>
                  Upload to exhibitions
             </button>}
                </div>
              </div>

            </div>
  
    {
     handleUploadCClicked===true &&urlImage&& urlImage.length !==selectedFiles.length   &&
      <div>
     <div style={{display:'flex',justifyContent:'center', marginRight:'30%'}}>
      <LoaderAnimation/>
      </div>  
      <p>subiendo Imagenes...</p>
      </div>
 
    }
     
  <section>
    {urlImage && urlImage.length>0   && selectedFiles.length>0 &&
      <div>
        {
          urlImage.map((img,index)=> <img key={index} style={{width:'5%', margin:'4px'}} src={img} alt="imagen subida" />)
        }
      
     </div>
    }       
 </section> 

 <section>
     {urlImage && urlImage.length>0  && selectedFiles.length>0 &&
     <div>
       <FormUploadExhibitionToDb img={urlImage}/>
     </div>
     }
</section>
   </div>
     
  );

}

export default FormUploadExhibition;