import axios from "axios";

const handleUploadToCloud = async (selectedFiles, folder) => {   
  try {
   for (let i = 0; i < selectedFiles.length; i++) {
     const formData = new FormData();
     formData.append('file', selectedFiles[i]);
     formData.append('upload_preset', 'fiwvpzcu');
     formData.append('folder', folder)

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

export default handleUploadToCloud