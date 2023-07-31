'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";


 const Bio = () => {
    const [contact, setContact] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const contactData = await getData('contact');
        const typeOfContact= contactData.map((network)=> network.type)
        const infoContact= contactData.map((network)=> network.contactValue)
        setContact(infoContact)
        console.log(contactData)
          };      
      fetchData();  
    }, []);


    return (< >
    <Navigation/>     
    <Box>
    {
     contact
    } 
    </Box>
    
    </>

        )
}
export default Bio



