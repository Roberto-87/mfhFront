'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ImageUploaderBio = () => {
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
        formData.append('folder', 'biografia')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { secure: true } // Agregar esta línea
          }
        );
        if(!response) throw new Error('error al subir los datos')

        console.log('Upload response:', response.data);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload to Bio</button>
    </div>
  );
};

export default ImageUploaderBio;