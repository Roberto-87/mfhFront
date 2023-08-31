import {AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import {BsSnapchat,BsTiktok} from 'react-icons/bs'
import {PiTelegramLogoDuotone} from 'react-icons/pi'
import styles from '../CardContact/CardContact.module.css'

const ContactIcons=({type})=>{
    switch (type) {
        case 'instagram':
          return <AiOutlineInstagram className={styles.iconsContact} />;
        case 'twitter':
          return <AiOutlineTwitter className={styles.iconsContact} />;
        case 'facebook':
          return <AiOutlineFacebook className={styles.iconsContact} />;
        case 'linkedin':
          return <AiOutlineLinkedin className={styles.iconsContact} />;
        case 'snapchat':
          return <BsSnapchat className={styles.iconsContact} />;
        case 'whatsapp':
          return <AiOutlineWhatsApp className={styles.iconsContact} />;
        case 'telegram':
          return <PiTelegramLogoDuotone className={styles.iconsContact} />;
        case 'mail':
          return <AiOutlineMail className={styles.iconsContact} />;
        case 'tiktok':
          return <BsTiktok className={styles.iconsContact} />;
        case 'youtube':
          return <AiOutlineYoutube className={styles.iconsContact} />;
        default:
          return null;
      }
    }
export default ContactIcons