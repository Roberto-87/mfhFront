'use client'
import React, { useRef, useState,useEffect } from 'react';
import axios from 'axios';
import FormWorksUpload2 from './formWorksUpload2'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation';
import { PhotoIcon } from '@heroicons/react/24/solid'
import FormUploadPortfolio from '../FormUploadPortfolio/FormUploadPortfolio';
import FormUploadText from '../FormUploadText/FormUploadText';
import FormUploadCover from '../FormUploadCover/FormUploadCover';
import swal from 'sweetalert';
import FormUploadContact from '../FormUploadContact/FormUploadContact';
import FormUploadBioNoPhoto from '../FormUploadBioNoPhoto/FormUploadBioNoPhoto';
import FormUploadBioPhoto from '../FormUploadBioPhoto/FormUploadBioPhoto';
import { Button } from '@mui/material';
import { imageFormat } from '../../../utils/functions';

const ImageUploader = ({folder = 'Obras', title='obra'}) => {
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [urlImage, setUrlImage]= useState()
   const [clean, setClean]= useState()
   const [pathname, setPathname]= useState()
   const [error, setError]= useState(false)
   const [handleUploadCClicked, setHandleUploadClicked]= useState(false)
   const [noPhoto, setNoPhoto]= useState(false)
   const inputFileRef = useRef(null);

   useEffect(() => {
    setNoPhoto(false)
    const router= window.location.pathname.split('/').at(-1)
    setPathname(router)
  }, [pathname])

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  }; 
/* ------------------------------------------ */
   const handleUpload = async () => {   
     try {
    setHandleUploadClicked(true)
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'fiwvpzcu');
        formData.append('folder', folder)


        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { secure: true } // Agregar esta línea
          }
        );
        if(!response) throw new Error('error al subir los datos')
          console.log(response.data.url)
       setUrlImage(response.data.url)
      }
    } catch (error) {
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
  /* ------------------------------------------ */
  const handleClean = () => {
    setClean(true)
    setUrlImage()
    setSelectedFiles([]);
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
    setHandleUploadClicked(false)

  };
  const onHandleForm=()=> {
    setNoPhoto(true)
  }

  return (

   <div>
    {pathname !== 'contact' && 
        <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              <h2>Subir nueva {title}</h2> 
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
                    {
                      pathname==='portfolio' ?   <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                      :
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    }
                  </div>
            {  selectedFiles.length> 0 &&    <button  onClick={handleUpload}>Upload to cloud</button>  }
                </div> 
              </div>

            </div>
            }
   
   <section>
      {urlImage  && selectedFiles.length>0 && pathname === 'portfolio' &&
      <div>
      <embed style={{width:'15%', margin:'4px'}} src={urlImage} alt="imagen subida" />
      <FormUploadPortfolio img={urlImage}/>
     </div>
    }       
 </section>  
 <section>
   
   { pathname === 'contact' && 
     <div>
      <FormUploadContact/>
    </div>
   }       
</section>  
  
  {
     handleUploadCClicked===true && !urlImage   &&  
      <div>
     <div style={{display:'flex',justifyContent:'center', marginRight:'20%'}}>
      <LoaderAnimation/>
      </div>  
      <p>subiendo Imagen...</p>
      </div>
 
  }
     
  <section>
    {urlImage  && selectedFiles.length>0 && pathname !== 'portfolio' && pathname!=='text'&& 
      <div>
      <img style={{width:'12%', margin:'4px'}} src={imageFormat(urlImage)} alt="imagen subida" />
     </div>
    }       
 </section> 

 <section>
   {pathname==='bio' && selectedFiles.length===0 && <Button variant="contained" onClick={onHandleForm}>omitir foto</Button>}
   
   
   {pathname==='bio' && noPhoto===true && !urlImage && selectedFiles.length===0 &&  <FormUploadBioNoPhoto/> }
   {pathname==='bio' && !noPhoto && selectedFiles.length>0 && urlImage.length>0 && <FormUploadBioPhoto img={imageFormat(urlImage)}/> }

        
</section>  

 <section>
     {urlImage  && selectedFiles.length>0 && pathname === 'text' &&
     <div>
       <embed style={{width:'15%', margin:'4px'}} src={urlImage} alt="imagen subida" />
       <FormUploadText img={urlImage}/>
     </div>
     }
</section>

<section>
     {urlImage  && selectedFiles.length>0 && pathname === 'cover' &&
     <div>
       <FormUploadCover img={urlImage}/>
     </div>
     }
</section>

 <section>
     {urlImage  && selectedFiles.length>0 && pathname !== 'portfolio' && pathname!=='text' && pathname!=='cover'&&pathname!=='bio'&&
     <div>
       <FormWorksUpload2 img={urlImage}/>
     </div>
     }
</section>


   </div>
     
  );

}

export default ImageUploader;