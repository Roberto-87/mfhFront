'use client'
import { Card } from '@mui/material'
import styles from './CardContact.module.css'
import { comfortaa } from '../../fonts/fonts'
import Link from 'next/link'
import { useEffect } from 'react'
import {AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import {BsSnapchat,BsTiktok} from 'react-icons/bs'
import {PiTelegramLogoDuotone} from 'react-icons/pi'


const CardContact=({contact})=>{
   useEffect(()=>{
    console.log(contact)
  },[])

  return(
 <div className={styles.cardContainer}> 
   { contact?.map(({description, link, id,type})=>{
     return (
<>
   <Link href={link} target='black'   className={`${comfortaa.className} ${styles.linkContact}`}>
                  {description} 
      {type ==='instagram' && < AiOutlineInstagram  className={styles.iconsContact}/>}
      {type ==='twitter' && < AiOutlineTwitter  className={styles.iconsContact}/>}
      {type ==='facebook' && < AiOutlineFacebook className={styles.iconsContact} />}
      {type ==='linkedin' && < AiOutlineLinkedin className={styles.iconsContact} />}
      {type ==='snapchat' && < BsSnapchat className={styles.iconsContact}/>}
      {type ==='whatsapp' && < AiOutlineWhatsApp className={styles.iconsContact} />}
      {type ==='telegram' && < PiTelegramLogoDuotone className={styles.iconsContact} />}
      {type ==='mail' && < AiOutlineMail className={styles.iconsContact} />}
      {type ==='tiktok' && < BsTiktok  className={styles.iconsContact}/>}
      {type ==='youtube' && < AiOutlineYoutube  className={styles.iconsContact}/>}
      </Link>
</>

)   
  })
}
 </div>
  )
}
export default CardContact  

