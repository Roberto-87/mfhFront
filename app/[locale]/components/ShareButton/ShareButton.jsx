'use client'
import {AiOutlineMail} from 'react-icons/ai'
import styles from './ShareButton.module.css'
import { useEffect } from 'react';

const ShareButton=({url,description,image, id})=>{

const emailHtmlContent = `${url}`;

const mailtoLink = `mailto:?subject=Maria Ferrari Hardoy: ${description}&body=${encodeURIComponent(emailHtmlContent)}`;

    return(
        <>
        <div className={styles.btnWrap}>
        <span className={styles.span}>SHARE</span>
        <div className={styles.container}>
         <a target="_blank" href={`${mailtoLink}`} className={`${styles.fab} ${styles.faMail}`}><AiOutlineMail style={{fontSize:'20px'}}/></a> 
       </div>
    </div>

        </>
    )
}
export default ShareButton