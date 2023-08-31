'use client'
import styles from './CardContact.module.css'
import { comfortaa } from '../../fonts/fonts'
import Link from 'next/link'
import ContactIcons from '../ContactIcons/ContactIcons'

const CardContact=({contact})=>{
  return(
 <div className={styles.cardContainer}> 
   { contact?.map(({description, link, id,type})=>{
     return (
<>
   <Link href={link} target='black'   className={`${comfortaa.className} ${styles.linkContact}`}>
    {description} 
    <ContactIcons type={type}/>
   </Link>
</>
)   
  })
}
 </div>
  )
}
export default CardContact  