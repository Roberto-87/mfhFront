import { BASE_URL, WORKS } from '../../utils/consts';
import axios from 'axios';

export const postData = async (selectedFiles) => {   
  try {
    const data= {selectedFiles}
    const  postInDb= await axios.post(`${BASE_URL}${WORKS}/cloudupload`, selectedFiles)
    if(!postInDb) throw new Error('No se pudo subir la imagen')
  } catch (error) {
      return error
  }
  }