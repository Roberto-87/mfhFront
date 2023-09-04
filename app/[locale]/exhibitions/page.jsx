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
          const httpsFormat= worksWithDimensions?.map((work)=> work.images.replace('http', 'https'))
          setExhibitions(httpsFormat);          
        } catch (error) {
          return {error:error.message}
        }
      };      
      fetchDataExhibition();  
    }, []);

    return (< >   
        <CardExhibitions exhibitions={exhibitions} />
        <p>prueba</p>
         </>
        )
}
export default Exhibitions