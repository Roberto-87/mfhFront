'use client'
import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload to works</button>
    </div>
  );
};

export default ImageUploader;
