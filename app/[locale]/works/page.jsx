'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks/CardWorks";
import {WORKS} from '../../utils/consts.js'

 const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
   const fetchData = async () => {
     const worksData = await getData(`${WORKS}/active`);
     setWorks(worksData);
    };      
    fetchData();  
  }, []);
    
    return (< > 
        <CardWorks works={works} />
        </>
        )
}
export default Works



