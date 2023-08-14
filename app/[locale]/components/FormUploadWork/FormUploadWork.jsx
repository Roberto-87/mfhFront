'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import FormWorksUpload2 from './formWorksUpload2'
import Loader from '../Loader/Loader';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import handleUploadToCloud from './upToCloud';



const ImageUploader = () => {
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [urlImage, setUrlImage]= useState()
   const [uploadToCloud, setUploadToCloud]=useState(false)
   const [clean, setClean]= useState()
   const [handleUploadCClicked, setHandleUploadClicked]= useState(false)
   const inputFileRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  }; 

   const handleUpload = async () => {   
     try {
    setHandleUploadClicked(true)
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'fiwvpzcu');
        formData.append('folder', 'Obras')


        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' }
          }
        );

       setUrlImage(response.data.url)
      }
    } catch (error) {
      console.error('Upload error:', error);
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

   <div>
     <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              <h2>Subir nueva obra</h2> 
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
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"  ref={inputFileRef}   onChange={handleFileSelect} />
                    </label>              <button onClick={handleClean}>Clear</button>
                    <p className="pl-1">or drag and drop</p>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
            {  selectedFiles.length> 0 &&    <button  onClick={handleUpload}>
                  Upload to works
             </button>}
                </div>
              </div>

            </div>
  
    {
     handleUploadCClicked===true && !urlImage   &&
      <div>
     <div style={{display:'flex',justifyContent:'center', marginRight:'30%'}}>
      <Loader/>
      </div>  
      <p>subiendo Imagen...</p>
      </div>
 
    }
     
  <section>
    {urlImage  && selectedFiles.length>0 &&
      <div>
      <img style={{width:'12%', margin:'4px'}} src={urlImage} alt="imagen subida" />
     </div>
    }       
 </section> 

 <section>
     {urlImage  && selectedFiles.length>0 &&
     <div>
       <FormWorksUpload2 img={urlImage}/>
     </div>
     }
</section>
   </div>
     
  );

}

export default ImageUploader;