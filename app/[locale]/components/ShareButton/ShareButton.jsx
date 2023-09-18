'use client'
import {FaFacebookF,FaPinterestP,FaTwitter } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import styles from './ShareButton.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

const ShareButton=({url,description, id})=>{

/*     const encodedUrl = encodeURIComponent(`https://tu-sitio.com/works/${work.id}`);
const encodedDescription = encodeURIComponent(`${work.title}, ${work.year}. ${work.material} ${work.size}.`);

// Contenido HTML personalizado para el correo
const emailHtmlContent = `
  <html>
    <body>
      <h1>Compartir trabajo</h1>
      <p>${encodedDescription}</p>
      <p><a href="${encodedUrl}">Enlace al trabajo</a></p>
    </body>
  </html>
`;

// Generar el enlace 'mailto' con el contenido HTML
const mailtoLink = `mailto:?subject=Compartir trabajo&body=${encodeURIComponent(emailHtmlContent)}`;

// Crear un enlace para abrir el cliente de correo predeterminado
<a href={mailtoLink}>Enviar por correo</a> */


    return(
        <>
        <div className={styles.btnWrap}>
        <span className={styles.span}>SHARE</span>
        <div className={styles.container}>
         <a target="_blank" href={`mailto:?subject=María Ferrari Hardoy&body=${description}%20${`${url}`}`} className={`${styles.fab} ${styles.faMail}`}><AiOutlineMail style={{fontSize:'20px'}}/></a> 
       </div>
    </div>

        </>
    )
}
export default ShareButton