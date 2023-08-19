const validation =async ({  image, title, date, type,author,status}) => {
    let errors = {};
  
    if (!image) {
       errors["image"] = "Por favor agregá una imagen del texto";
    }
    if (image && image==='undefined' ) {
      errors["image"] = "Agregá una imagen válida";
    }
    if (!title) {
      errors["title"] = "Indicá un título del texto";
    }
    if (!date) {
     errors["date"] = "Por favor agregá una fecha del texto";
  }
    if (!type) {
      errors["type"] = "Por favor agregá un type del texto";
   }
 if (!author) {
    errors["author"] = "Por favor agregá una autore ";
 }
  if (!status) {
    errors["status"] = "Por favor seleccioná un status";
 }  
   return errors;
    };
  
  
    export default validation;
    