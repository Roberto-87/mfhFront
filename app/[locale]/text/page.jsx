'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";
import {TEXT} from '../../utils/consts'
import { textOrdered } from '../../utils/functions';

const Works = () => {
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const papersData = await getData(`${TEXT}/active`);
        const orderedPapers= textOrdered(papersData)
        const httpsFormat= orderedPapers.map((item)=> item.image.replace('http', 'https'))
        setPapers(httpsFormat);
      };      
      fetchData();  
    }, []);

    return (< > 
        <CardText texts={papers} />
        </>
        )
}
export default Works
