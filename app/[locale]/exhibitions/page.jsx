'use client'
import CardExhibitions from '../components/CardExhibitions/CardExhibitions';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData';
import { EXHIBITIONS , TEXT} from '../../utils/consts';

 const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);
  
    useEffect(() => { 
      const fetchDataExhibition = async () => {
        const exhibitionsFetched = await getData(`${EXHIBITIONS}/active`);
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