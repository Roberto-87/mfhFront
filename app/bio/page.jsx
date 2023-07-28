'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'


 const Bio = () => {
    const [bio, setBio] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const bioData = await getData('bio');

        setBio(bioData[0].text);

      };      
      fetchData();  
    }, []);
    return (< > 
        <Navigation/>     
        <p style={{color:'white'}}>{bio}</p> 
{/*         <CardBio bio={bio} /> */}
      
      </>
        )
}
export default Bio



