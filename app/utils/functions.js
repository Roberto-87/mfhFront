export const getDimensions = async (works) => {
  if (!Array.isArray(works) || works.length === 0) {
    throw new Error('No valid works array provided');
  }

  const promises = works?.map(async (work) => {
      const img = new Image();
      img.src = work.image;
      await img.decode(); 
      return {
        ...work,
        width: img.width,
        height: img.height,
      };
    });
  
    return Promise.all(promises);
  };

export const imagesMaped=(exhibitions)=>{
  if(!exhibitions)throw new Error('exhibitions not found ') 
    return exhibitions?.map((each)=> each.images)
   }

export const exhibitionSort=(exhibitions)=>{
  if(!exhibitions)throw new Error('exhibitions not found ') 
  return exhibitions?.sort((a,b)=>a.number - b.number)
}   

export const textOrdered=(texts)=>{
  if(!texts)throw new Error('texts not found ') 
  return texts.sort((a,b)=> b.date.split(' ')[1]- a.date.split(' ')[1])
}

export const papersFinder=(papers, id)=>{
  if(!papers)throw new Error('papers not found ') 
  return papers.find((text)=> text.id===id)
}

export const uploadFunction =async()=>{
  try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', selectedFiles[i]);
        formData.append('upload_preset', 'fiwvpzcu');
        formData.append('folder', folder)


        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/mariaferrari/upload',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { secure: true } // Agregar esta línea
          }
        );
        if(!response) throw new Error('error al subir los datos')
       return response.data.url     
      }
    } catch (error) {
      return error
    }
}