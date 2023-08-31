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
