'use client'
import { PhotoIcon } from "@heroicons/react/24/solid"
import { useState, useRef } from "react";

const SelectFileToUpload=({pathname,handleUpload, title})=>{
    const [selectedFiles, setSelectedFiles] = useState([]);
   const [urlImage, setUrlImage]= useState()
   const [clean, setClean]= useState()
   const [handleUploadCClicked, setHandleUploadClicked]= useState(false)
   const inputFileRef = useRef(null);

    const handleClean = () => {
        setClean(true)
        setUrlImage()
        setSelectedFiles([]);
        if (inputFileRef.current) {
          inputFileRef.current.value = '';
        }
        setHandleUploadClicked(false)
    
      };
    const handleFileSelect = (event) => {
        setSelectedFiles(event.target.files);
      }; 
 
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
    </div>    
             )

}

export default SelectFileToUpload