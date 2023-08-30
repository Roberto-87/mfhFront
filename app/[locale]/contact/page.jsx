'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box, Card} from "@mui/material";
import CardContact from '../components/CardContact/CardContact'
import { CONTACT } from '../../utils/consts';

const Contact = () => {
    const [contact, setContact] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        const contactData = await getData(`${CONTACT}/active`);
        setContact(contactData.reverse())
       };      
      fetchData();  
    }, []);
    return (< >
    <Box>
      <CardContact contact={contact}/>
    </Box>    
    </>

        )
}
export default Contact



