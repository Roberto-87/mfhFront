import {FaFacebookF,FaPinterestP,FaTwitter} from 'react-icons/fa'
import styles from './ShareButton.module.css'
import Link from 'next/link'

const ShareButton=({url,description})=>{
    return(

        <>
        <div className={styles.btnWrap}>
        <span className={styles.span}>SHARE</span>
        <div className={styles.container}>
            <a target='_blank' href={`https://www.facebook.com/sharer.php?u=${url}`} className={`${styles.fab} ${styles.faFacebookF}`}><FaFacebookF style={{fontSize:'20px'}}/></a>
            <a target='_blank' href={`https://twitter.com/intent/tweet?url=${url}`} className={`${styles.fab} ${styles.faTwitter}`}><FaTwitter style={{fontSize:'20px'}}/></a>
            <a target='_blank' href={`https://www.pinterest.com/pin/create/button/?url=${url}&description=${description}`} className={`${styles.fab} ${styles.faInstagram}`}><FaPinterestP style={{fontSize:'20px'}}/></a>
         </div>
    </div>

        </>
    )
}
export default ShareButton