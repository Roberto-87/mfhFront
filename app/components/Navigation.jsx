'use client'
import Link from "next/link";
import styles from './Navigation.module.css'
import Brand from "./Brand";
import { useState, useEffect } from "react";
import  NavBarMobile from "./NavbarMobile";
import SelectExhibitions from './SelectExhibitions'
import { usePathname } from 'next/navigation'
import { Avatar } from "@mui/material";

const links = [
    {
      label: "WORKS ",
      route: "/works",
    },
    {
      label: "EXHIBITIONS",
      route: "/exhibitions",
    },
    
    {
      label: "PAPERS",
      route: "/text",
    },
    {
      label: "BIOGRAPHY",
      route: "/bio",
    },
     {  
    label: "CONTACT",
    route: "/contact",
  },
    

  ];


const Navigation=()=>{
  const currentPathName= usePathname()
  const withoutNavbar= ['/admin','/admin/exhibitions','/admin/documents','/admin/biography','/admin/cover','/admin/contact','/admin/works']
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
                  </ul> 
          </nav>
                  }
      </header>
          :
          <header className={styles.navbarContainer}>
              {/*     {mobile? <NavBarMobile/>: */}
                <nav className={styles.navbarContainerAdmin}>
                        <Brand/>
                        <Avatar className={styles.avatarAdmin} >MF</Avatar>
                    {/* SearchBar */}
                     </nav>
                </header>
                )      

}
}

export default Navigation