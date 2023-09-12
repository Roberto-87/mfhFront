'use client'
import { useState } from "react"
import { CONTACT } from "../../../utils/consts"
import getData from "../../hooks/getData"
import ContactIcons from "../ContactIcons/ContactIcons"
import Link from "next/link"

const fetchData=async()=>{
    const data= await getData(`${CONTACT}/active`)
    return data
}

const PrincipalSM=async()=>{
    const contactfetched= await fetchData()
    if(!contactfetched.length>0)throw new Error('error al obtener los datos de contacto.')
    const mappedFields = contactfetched.map((data) => ({type: data.type, link: data.link})) 
    const[contact, setContact]=useState()
    useEffect(()=>{setContact(mappedFields)
    console.log(contact)
    },[])

   { 
    contact?.map(({link,type})=>{
     return (
    <>
   <Link href={link} target='black' className={`${comfortaa.className} ${styles.linkContact}`}>
     <p>prueba</p>
     <ContactIcons type={type}/>
   </Link>
    </>
)   
  })
}
    
}

export default PrincipalSM