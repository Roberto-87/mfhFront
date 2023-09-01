export const getDimensions = async (works) => {
    const promises = works.map(async (work) => {
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
    return exhibitions?.map((each)=> each.image)
   }

export const exhibitionSort=(exhibitions)=>{
  return exhibitions?.sort((a,b)=>a.number - b.number)
}   

export const textOrdered=(texts)=>{
  return texts.sort((a,b)=> b.date.split(' ')[1]- a.date.split(' ')[1])
}

export const papersFinder=(papers, id)=>{
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
            headers: { 'Content-Type': 'multipart/form-data' }
          }
        );
        if(!response) throw new Error('error al subir los datos')
       return response.data.url     
      }
    } catch (error) {
      return error
    }
}