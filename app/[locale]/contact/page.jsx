'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import CardContact from '../components/CardContact/CardContact'


 const Bio = () => {
    const [contact, setContact] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const contactData = await getData('contact');
        const typeOfContact= contactData.map((network)=> network.type)
        const infoContact= contactData.map((network)=> network.contactValue)
        setContact(infoContact)
      };      
      fetchData();  
    }, []);
    return (< >
    <Box>
     <CardContact contactData={contact}/>
    </Box>    
    </>

        )
}
export default Bio



