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
        try {
          const exhibitionsFetched = await getData(`${EXHIBITIONS}/active`);
          const worksWithDimensions = await getDimensions(exhibitionsFetched);
          if(!exhibitionsFetched )throw new Error('error el recibir las exhibiciones')
          if(!worksWithDimensions )throw new Error('error el recibir las dimensiones')
          setExhibitions(exhibitionsFetched);          
        } catch (error) {
          return {error:error.message}
        }
      };      
      fetchDataExhibition();  
    }, []);

    return (< >   
   { exhibitions.map((exhibition, index)=> <img key={index} src={exhibition.images[0].replace('http', 'https')}></img>) }
{/*         <CardExhibitions exhibitions={exhibitions} /> */}
        </>
        )
}
export default Exhibitions