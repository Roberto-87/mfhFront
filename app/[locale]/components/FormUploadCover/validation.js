const validation =async ({  image, type,status}) => {
    let errors = {};
  
    if (!image) {
       errors["image"] = "Por favor agregá una imagen del texto";
    }
    if (!type) {
      errors["type"] = "Por favor agregá un type del texto";
   }

  if (!status) {
    errors["status"] = "Por favor seleccioná un status";
 }  
   return errors;
    };
  
  
    export default validation;
    