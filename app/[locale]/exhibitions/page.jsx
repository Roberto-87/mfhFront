'use client'
import CardExhibitions from '../components/CardExhibitions/CardExhibitions';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData';
import { EXHIBITIONS , TEXT} from '../../utils/consts';

 const Exhibitions = () => {
    const [exhibitions, setExhibitions] = useState([]);

    const getDimensions = async (exhibitions) => {
      const promises = exhibitions.map(async (exhibition) => {
        const img = new Image();
        img.src = exhibition.images.map((img,index)=>img)[0];
        await img.decode(); 

        return {
          ...exhibition,
          width: img.width,
          height: img.height,
        };
      });
    
      return Promise.all(promises);
    };


    useEffect(() => { 
      const fetchDataExhibition = async () => {
        const exhibitionsFetched = await getData(`${EXHIBITIONS}/active`);
        const worksWithDimensions = await getDimensions(exhibitionsFetched);
        setExhibitions(worksWithDimensions);
        console.log(exhibitions)
      };      
      fetchDataExhibition();  
    }, []);

    

    return (< >   
        <CardExhibitions exhibitions={exhibitions} />
         </>
        )
}
export default Exhibitions

