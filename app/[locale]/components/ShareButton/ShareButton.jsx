import {FaFacebookF,FaPinterestP,FaTwitter } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import styles from './ShareButton.module.css'
import Link from 'next/link'

const ShareButton=({url,description})=>{
    return(

        <>
        <div className={styles.btnWrap}>
        <span className={styles.span}>SHARE</span>
        <div className={styles.container}>
         <a target="_blank" href={`mailto:?subject=María Ferrari Hardoy&body=${description}%20${encodeURIComponent(`${url}`)}`} className={`${styles.fab} ${styles.faMail}`}><AiOutlineMail style={{fontSize:'20px'}}/></a> 
       </div>
    </div>

        </>
    )
}
export default ShareButton