import { WORKS } from "../../../utils/consts";
import getData from "../../hooks/getData";

const getNumbers = async (number) => {
  const numbers = await getData(`${WORKS}/numbers`);
  return numbers.includes(number);

};

const validation =async ({ title, material,size,number,year,section, image,status}) => {
  let errors = {};
  const regexOnlyNumber = /^\d+$/;
    if (title === "") {
      errors["title"] = "Indica el título de la obra";
    }
    if (!material) {
      errors["material"] = "Indicá los materiales con que se realizó la obra";
    }
    if (!size) {
      errors["size"] = "Por favor ingresá las medidas de la obra";
    }  
    if (!year) {
        errors["year"] = "Por favor ingresá el año de creación de la obra";
      }  
      if (!image) {
        errors["image"] = "Por favor agregá una imagen de la obra";
      }
      if (!status) {
        errors["status"] = "Por favor seleccioná un status";
      }  
      if (!section) {
        errors["section"] = "Por favor seleccioná una sección";
      }  
    if (!number) {
        errors["number"] = "Por favor ingresá el número de la obra";
    }  else if ( !regexOnlyNumber.test(number)){
        errors["number"] = "Solo se permiten números"
    } else if (number) {
      const numberExists = await getNumbers(number);
      if (numberExists) {
        errors["number"] = "Ya existe una obra con ese número";
      }
    }
    return errors;
  };


  export default validation;
  