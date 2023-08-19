import getData from "../../hooks/getData";

const getNumbers = async (number) => {
  const numbers = await getData('exhibitions/number');
  return numbers.includes(number);  
};


const validation =async ({ exhibitionName,place, date,number,type,image,status,format}) => {
  let errors = {};
 const regexOnlyNumber = /^[1-9]\d*$/;

    if (exhibitionName === "") {
      errors["exhibitionName"] = "Indica el título de la exhibición";
    }
    if (!place) {
      errors["place"]= "Indicá el lugar donde se desarrolló la exhibición";
    }
    if (!date) {
      errors["date"] = "Por favor ingresá la fecha en que se realizó la exhibición";
    }  
     if (!number) {
        errors["number"] = "Por favor ingresá el número de la exhibición";
    } else if ( !regexOnlyNumber.test(number)){
        errors["number"] = "Solo se permiten números"
    }   else if (number) {
      const numberExists = await getNumbers(number);
      if (numberExists) {
        errors["number"] = "Ya existe una exhibición con ese número";
      }  
    } 
    if (!type) {
        errors["type"] = "Por favor seleccioná una sección"
      }  
      if (!status) {
        errors["status"] = "Por favor seleccioná un status";
      }   
      if (!format) {
        errors["format"] = "Por favor seleccioná un formato";
      }   
    return errors;
  };


  export default validation;

