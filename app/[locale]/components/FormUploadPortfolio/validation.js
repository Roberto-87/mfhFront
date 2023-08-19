
const validation =async ({  image, date, status,language}) => {
  let errors = {};

    if (!date) {
      errors["date"] = "Indicá una fecha de portfolio";
    }
    if (!language) {
      errors["language"] = "Por favor ingresá el idioma del portfolio";
    }  
    if (!image) {
       errors["image"] = "Por favor agregá una imagen de la obra";
    }
    if (!type) {
      errors["type"] = "Por favor agregá un type de la obra";
   }

      if (image && image==='undefined' ) {
        errors["image"] = "Agregá una imagen válida";
      }
      if (!status) {
        errors["status"] = "Por favor seleccioná un status";
      }  
    
    return errors;
  };


  export default validation;
  