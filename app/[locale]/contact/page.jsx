'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import {AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai'
import Link from "next/link";


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
    console.log(contact)
    

    return (< >
    <Box>
      <AiOutlineInstagram></AiOutlineInstagram>
     <AiOutlineMail ></AiOutlineMail> 
     {contact}  
    </Box>
    
    </>

        )
}
export default Bio



