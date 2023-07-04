
import Link from "next/link";
import styles from './AdminNavigation.module.css'
import { FaImage } from 'react-icons/fa';
import{AiFillHome,AiFillCamera} from 'react-icons/ai';
import {BiLibrary, BiSolidMemoryCard}from 'react-icons/bi';
import {MdTextsms} from 'react-icons/md'
import {RiNewspaperLine} from 'react-icons/ri'


const links = [
  {
    label: "HOME ",
    route: "/",
    icon: <AiFillHome/>
  },
    {
      label: "WORKS",
      route: "/admin/works",
      icon: <FaImage/>
    },
    {
      label: "EXHIBITIONS",
      route: "/admin/exhibitions",
      icon: <BiLibrary/>
    },
    {
      label: "PAPERS",
      route: "/admin/documents",
      icon:<RiNewspaperLine/>
    },
    {
      label: "BIOGRAPHY",
      route: "/admin/biography",
      icon:<BiSolidMemoryCard/>
    },
    {  
    label: "COVER",
    route: "/admin/cover",
    icon:<AiFillCamera/>
   
},  {  
  label: "CONTACT",
  route: "/admin/contact",
  icon: <MdTextsms/>
},
    

  ];


const AdminNavigation=()=>{

 return (
    <header className={styles.navbarAdminContainer}>
          <div>
               <nav className={styles.brandContainer}>
                 <ul className={styles.itemsNavBarContainer}>
                    {links.map(({ label, route, icon }) => (
                      <li className={styles.navbarItem} key={route}>
                        <div className={styles.containerNavBarAdmin}>
                        <div  className={styles.containerLinksAdmin}>
                                          <Link href={route}>{label}</Link>
                        </div>
                        <div  className={styles.containerIconsAdmin}>
                        <Link href={route}> {icon}</Link>
                        </div>
             
                        </div>
               
                    </li>
                    
                    ))}
                            </ul> 
                </nav>

          </div>
                
     </header>
        )
}

module.exports= AdminNavigation