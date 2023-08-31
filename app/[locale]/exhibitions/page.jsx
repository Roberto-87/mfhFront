'use client'
import CardExhibitions from '../components/CardExhibitions/CardExhibitions';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData';
import { EXHIBITIONS} from '../../utils/consts';
import { getDimensions } from '../../utils/functions';

 const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);

    useEffect(() => { 
      const fetchDataExhibition = async () => {
        const exhibitionsFetched = await getData(`${EXHIBITIONS}/active`);
        const worksWithDimensions = await getDimensions(exhibitionsFetched);
        setExhibitions(worksWithDimensions);
      };      
      fetchDataExhibition();  
    }, []);

    return (< >   
        <CardExhibitions exhibitions={exhibitions} />
         </>
        )
}
export default Exhibitions