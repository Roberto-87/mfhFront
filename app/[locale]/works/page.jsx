'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks/CardWorks";
import {WORKS} from '../../utils/consts.js'


const Works = () => {
  const [works, setWorks] = useState([]);
  
  const getDimensions = async (works) => {
    const promises = works.map(async (work) => {
      const img = new Image();
      img.src = work.image;
      await img.decode(); 
      return {
        ...work,
        width: img.width,
        height: img.height,
      };
    });
  
    return Promise.all(promises);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const worksData = await getData(`${WORKS}/active`);
      const worksWithDimensions = await getDimensions(worksData);
      setWorks(worksWithDimensions);
    };
  
    fetchData();
  }, []);
    

  
    return (< > 
        <CardWorks works={works} />
        
        </>
        )
}
export default Works



