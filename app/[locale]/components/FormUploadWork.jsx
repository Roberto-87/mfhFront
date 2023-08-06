'use client'
import React, { useState } from 'react';
import axios from 'axios';
import FormWorksUpload2 from '../components/formWorksUpload2'


const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);

  };

  const handleUpload = async () => {
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'fiwvpzcu');
        formData.append('folder', 'Obras')
        //metadatos contextuales 
        formData.append('date', 'example');
        formData.append('format', 'example');
        formData.append('place', 'example place');
        formData.append('title', 'example title');
        formData.append('type', 'example type');

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' }
          }
        );

        console.log('Upload response:', response.data);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <>
{/*     <div style={{display:'flex', width:'50%', justifyContent:'center'}}>
      <input type="file" multiple onChange={handleFileSelect} />
      <button style={{width:'50px', height:'50px'}} onClick={handleUpload}>Upload to works</button>
    </div>
<div> */}
    <FormWorksUpload2></FormWorksUpload2>
{/* </div> */}
    
    </>
  );
};

export default ImageUploader;

