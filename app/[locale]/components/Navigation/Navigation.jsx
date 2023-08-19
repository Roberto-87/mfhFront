'use client'
import Link from "next/link";
import styles from './Navigation.module.css'
import Brand from "../Brand/Brand";
import { useState, useEffect } from "react";
import  NavBarMobile from "../NavbarMobile/NavbarMobile";
import { usePathname, useRouter  } from 'next/navigation'
import ButtonsPortfolio from "../ButtonsPortfolio/ButtonsPortfolio";

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
  const withoutNavbar= ['/admin','/','/admin/exhibitions','/admin/portfolio','/admin/text','/admin/biography','/admin/cover','/admin/contact','/admin/works','/admin/bio','/admin/signin']
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
                  <ul className={styles.itemsNavBarContainer}>
                      {links.map(({ label, route }) => (
                                 <li className={styles.navbarItem} key={route}>
                          {route === currentPathName? <Link href={route}><strong>{label}</strong></Link>:
                          <Link href={route}>{label}</Link>
                          }
                       
                      </li>
                      ))}
                    <ButtonsPortfolio/>
                          
                  </ul> 
          </nav>
                  }
      </header>
          :
   null
                )      

}
}

export default Navigation