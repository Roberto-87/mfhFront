'use client'
import Navigation from "../components/Navigation"
import CardExhibitions from '../components/CardExhibitions';
import { useState, useEffect } from 'react';
import {fetchData} from "./exhibitionData";

 const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);
  
    useEffect(() => { 
      const fetchDataExhibition = async () => {
        const exhibitionsFetched = await fetchData();
         setExhibitions(exhibitionsFetched);
   

      };      
      fetchDataExhibition();  
    }, []);
    return (< > 
  
        <CardExhibitions exhibitions={exhibitions} />
        
      </>
        )
}
export default Exhibitions



