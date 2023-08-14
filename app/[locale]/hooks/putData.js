import axios from "axios";
import {BASE_URL} from '../../utils/consts'

const putData = async (route) => {
  try {
    const { data } = await axios.put(`${BASE_URL}${route}`);
    return data;
  } catch (error) {
    return { error };
  }
};
  
export default putData;
