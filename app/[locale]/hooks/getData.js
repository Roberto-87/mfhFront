import axios from "axios";
import {BASE_URL} from '../../utils/consts'

const getData = async (route) => {
  try {
    const { data } = await axios(`${BASE_URL}${route}`);
    return data;
  } catch (error) {
    return { error };
  }
};


  
export default getData;
