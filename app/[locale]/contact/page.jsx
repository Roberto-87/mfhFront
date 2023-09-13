'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box, Card} from "@mui/material";
import CardContact from '../components/CardContact/CardContact'
import { CONTACT } from '../../utils/consts';
import LoadingBar from 'react-top-loading-bar'

const Contact = () => {
  const [contact, setContact] = useState();
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    try {
        setProgress(100)
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
         <LoadingBar  color='black'progress={progress}  />
    <Box>
      <CardContact contact={contact}/>
    </Box>    
    </>

        )
}
export default Contact



