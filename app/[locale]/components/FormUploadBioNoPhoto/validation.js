import { BIO } from "../../../utils/consts";
import getData from "../../hooks/getData";

const getNumbers = async (number) => {
  const numbers = await getData(`${BIO}/${number}`);
  return numbers.includes(number);
};
  
const validation =async ({ title,text, type,number, status}) => {
  const regexOnlyNumber = /^\d+$/;
      let errors = {};
        if (!title) {
        errors["title"] = "Indicá un título del texto.";
      }
       if (!text) {
      errors["text"] = "Agregá un texto a la sección.";
    }
      if (!type) {
        errors["type"] = "Por favor agregá un type.";
     }
     if (!number) {
      errors["number"] = "Por favor ingresá el número de la bio";
  }  else if ( !regexOnlyNumber.test(number)){
      errors["number"] = "Solo se permiten números"
  } else if (number) {
    const numberExists = await getNumbers(number);
    if (numberExists) {
      errors["number"] = "Ya existe una bio con ese número";
    }
  }
    if (!status) {
      errors["status"] = "Por favor seleccioná un status.";
   }  
     return errors;
      };
    
    
  export default validation;
      