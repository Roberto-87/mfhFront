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
        setPapers(orderedPapers);
      };      
      fetchData();  
    }, []);

    return (< > 
        <CardText texts={papers} />
        </>
        )
}
export default Works
