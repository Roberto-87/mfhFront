'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box, Card} from "@mui/material";
import CardContact from '../components/CardContact/CardContact'
import { CONTACT } from '../../utils/consts';

const Contact = () => {
    const [contact, setContact] = useState();
  
    useEffect(() => {
      try {
        const fetchData = async () => {
          const contactData = await getData(`${CONTACT}/active`);
          if(!contactData.length>0)throw new Error('error al obtener los datos de contacto.')
          setContact(contactData.reverse())
         };      
        fetchData();  
        
      } catch (error) {
        return{ error: error.message}
      }
    }, []);
    return (< >
    <Box>
      <CardContact contact={contact}/>
    </Box>    
    </>

        )
}
export default Contact



