import axios from "axios";

const getData = async (route) => {
  try {
    const { data } = await axios(`http://localhost:3001/${route}`);
    return data;
  } catch (error) {
    return { error };
  }
};
  
export default getData;
