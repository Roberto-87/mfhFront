const isValidUrl = (url) => {
  const urlRegex = /^(http|https):\/\/([\w.-]+)(\.[\w-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/;
  return urlRegex.test(url);
};

const validation =async ({ description, link, type,status}) => {
    let errors = {};

    if (!description) {
      errors["description"] = "Indicá una descripción  de vía de comunicación.";
    }
    if (!link) {
     errors["link"] = "Por favor agregá un link de vía de comunicación.";
  } if(link && (!isValidUrl(link) && type!=='mail')){
    errors["link"] = "Por favor agregá un link válido.";
  }
    if (!type) {
      errors["type"] = "Por favor agregá un type de vía de comunicación.";
   }
  if (!status) {
    errors["status"] = "Por favor seleccioná un status de vía de comunicación.";
 }  
   return errors;
    };
  
  
export default validation;
    