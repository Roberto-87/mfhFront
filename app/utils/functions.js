import axios from "axios";
import {BASE_URL} from './consts'
const dotenv = require('dotenv');
dotenv.config();
const { CLOUD_NAME,API_KEY,API_SECRET}= process.env

export const getDimensions = async (works) => {
  if (!Array.isArray(works) || works.length === 0) {
    throw new Error('No valid works array provided');
  }

  const promises = works?.map(async (work) => {
      const img = new Image();
      img.src = work.image;
      await img.decode(); 
      return {
        ...work,
        width: img.width,
        height: img.height,
      };
    });
  
    return Promise.all(promises);
  };

export const imagesMaped=(exhibitions)=>{
  if(exhibitions){
    return exhibitions?.map((each)=> each.images)
   }
  }

export const exhibitionSort=(exhibitions)=>{
  if(exhibitions.length>0){
    return exhibitions?.sort((a,b)=>a.number - b.number)
  }
}   

export const textOrdered=(texts)=>{
  if(!texts)throw new Error('texts not found ') 
  return texts.sort((a,b)=> b.date.split(' ')[1]- a.date.split(' ')[1])
}

export const papersFinder=(papers, id)=>{
  if(!papers)throw new Error('papers not found ') 
  return papers.find((text)=> text.id===id)
}

export const uploadFunction =async(selectedFiles)=>{
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
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { secure: true } // Agregar esta línea
          }
        );
        if(!response) throw new Error('error al subir los datos')
       return response.data.url     
      }
    } catch (error) {
      return error
    }
}

export const imageFormat=(img)=> {
 if(img){
  return   img.replace('http','https')
 }
}
export const deleteFromCloud=async(urlImage, folder)=>{
  try {
    const { data } = await axios(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/search/by_asset_folder?asset_folder=${folder}`,
      {
        auth: {
          username: API_KEY,
          password: API_SECRET,
        },
      }
    );
    if (!data) throw new Error("Error en la solicitud a Cloudinary");
    const resources = data.resources;
    console.log(resources)  

  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

export const deleteWork=async(route,workId,urlImage, folder)=>{
const deleteInCloud= await deleteFromCloud(urlImage, folder) 
const response= await axios.delete(`${BASE_URL}${route}/delete/${workId}`)
return response 
}

export const searchFolder=(pathname)=>{
    switch(pathname){
      case 'works':
       return 'Obras';
      case 'exhibitions':
        return 'Exhibiciones';
        case 'text':
          return 'text';
          case 'bio':
            return 'bio';
            case 'cover':
              return 'cover';
              case 'portfolio':
                return 'Portfolio';
      default:
        return 'no se encontró la carpeta'  
    }
}