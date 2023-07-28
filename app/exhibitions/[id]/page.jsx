'use client'
import { useEffect,useState } from "react"
import Navigation from "../../components/Navigation"
import fetchData from "../exhibitionData"
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';


const Exhibition=({params})=>{
    const {id}= params
    const[exhibitionTitle, setExhibitionTitle]= useState('')
    const[exhibitionPlace, setExhibitionPlace]= useState('')
    const[exhibitionDate,setExhibitionDate]= useState('')
    const[exhibitionImages, setExhibitionImages]= useState([])

    useEffect(() => { 
        const fetchDataExhibition = async () => {
          const allExhibitionFetched = await fetchData();
          const title=   allExhibitionFetched[id.at(-1)].title
          const place=   allExhibitionFetched[id.at(-1)].place
          const date= format(parseISO(allExhibitionFetched[id.at(-1)].date), "MMMM yyyy", { locale: es })
          const images=   allExhibitionFetched[id.at(-1)].images
          setExhibitionTitle(title);
          setExhibitionImages(images);
          setExhibitionPlace(place)
          setExhibitionDate(date)
        };      
        fetchDataExhibition();  
      }, []);


    return (< > 
        <Navigation/>      
        <div>
        <h1 > {exhibitionTitle} </h1>
        <p>{exhibitionPlace}</p>
        <p>{exhibitionDate}</p>

       {
         exhibitionImages.map((image, index)=> <img style={{width:'50%'}} key={index} src={image}/>)
        } 
        </div>
      
      </>
        )
}

export default Exhibition