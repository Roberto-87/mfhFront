'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'


 const Bio = () => {
    const [contact, setContact] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const contactData = await getData('contact');
        setContact(contactData);
      };      
      fetchData();  
    }, []);
    return (< > 
        <Navigation/>     
        <p>{contact}</p> 
{/*         <CardBio bio={bio} /> */}
      
      </>
        )
}
export default Bio



