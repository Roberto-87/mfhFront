'use client'
import CardExhibitions from '../components/CardExhibitions/CardExhibitions';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData';

 const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);
  
    useEffect(() => { 
      const fetchDataExhibition = async () => {
        const exhibitionsFetched = await getData('exhibitions'); //take the images and make an exhibition
        const exhibitionsActive= exhibitionsFetched.filter((exhibition)=> exhibition.status===true) 
        setExhibitions(exhibitionsActive);

      };      
      fetchDataExhibition();  
    }, []);



    return (< >   
        <CardExhibitions exhibitions={exhibitions} />
         </>
        )
}
export default Exhibitions