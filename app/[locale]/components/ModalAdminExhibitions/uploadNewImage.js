import axios from "axios";

export const uploadNewImage = async (selectedFiles) => {   
 const uploadedUrls=[]
 
    try {
     for (let i = 0; i < selectedFiles.length; i++) {
       const formData = new FormData();
       formData.append('file', selectedFiles[i]);
       formData.append('upload_preset', 'fiwvpzcu');
       formData.append('folder', 'exhibiciones')


       const response = await axios.post(
         'https://api.cloudinary.com/v1_1/mariaferrari/upload',
         formData,
         {
          headers: { 'Content-Type': 'multipart/form-data' },
          params: { secure: true } // Agregar esta línea
         }
       );         if(!response) throw new Error('error al subir los datos')
        uploadedUrls.push(response.data.url);
       return uploadedUrls
     }
   } catch (error) {
     console.error('Upload error:', error);
   }
 };  