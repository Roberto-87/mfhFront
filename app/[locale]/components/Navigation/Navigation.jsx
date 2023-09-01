'use client'
import Link from "next/link";
import styles from './Navigation.module.css'
import Brand from "../Brand/Brand";
import { useState, useEffect } from "react";
import  NavBarMobile from "../NavbarMobile/NavbarMobile";
import { usePathname, useRouter  } from 'next/navigation'
import ButtonsPortfolio from "../ButtonsPortfolio/ButtonsPortfolio";
import {comfortaa} from'../../fonts/fonts'
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";

const links = [
    {
      label: "OBRAS ",
      route: "/works",
    },
    {
      label: "EXHIBICIONES",
      route: "/exhibitions",
    },
    
    {
      label: "TEXTOS",
      route: "/text",
    },
     {
      label: "BIOGRAFIA",
      route: "/bio",
    }, 
     {  
    label: "CONTACTO",
    route: "/contact",
  },

  ];


const Navigation=()=>{
  const currentPathName= usePathname()
  const router= useRouter()
  const withoutNavbar= ['/admin','/','/admin/exhibitions','/admin/portfolio','/admin/text','/admin/biography','/admin/cover','/admin/contact','/admin/works','/admin/bio','/admin/signin','/admin/forgotPassword']
  const [mobile, setMobile]= useState(false)

  const checkMobileMode = () => {
     setMobile(window.innerWidth < 768); 
  };

  useEffect(()=>{
    checkMobileMode()    

  },[])
 
{

  return (
      !withoutNavbar.includes(currentPathName) ?
      <header className={styles.navbarContainer}>
            {mobile? <NavBarMobile/>:
           
           <nav className={styles.brandContainer}>
              <Brand/>                 
                      {links.map(({ label, route }) => (
                                 <li className={styles.navbarItem} key={route}>
                          {route === currentPathName? <Link className={comfortaa.className} href={route}><strong>{label}</strong></Link>:
                          <Link href={route}>{label}</Link>
                          }

                      </li>
                      ))}
                      <li className={styles.navbarItem}><DropdownNavbar/></li>
               
         </nav>
                  }
      </header>
          :
   null
                )      

}
}

export default Navigation