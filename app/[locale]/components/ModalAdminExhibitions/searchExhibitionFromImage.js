export const searchExhibitionFromImage=(work, image)=>{
    if(work){
      for(let i=0; i< work.length;i++){
        if(work[i].images.find((i)=> i===image)){
        return({type:work[i].type, place:work[i].place, date:work[i].date ,id:work[i].id, images:work[i].images,  number: work[i].number, status:work[i].status , exhibitionName: work[i].exhibitionName })
        }
      }
    }
  }
