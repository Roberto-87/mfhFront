'use client'
import Link from "next/link";
import styles from './Navigation.module.css'
import Brand from "./Brand";
import { useState, useEffect } from "react";
import  NavBarMobile from "./NavbarMobile";
import SelectExhibitions from './SelectExhibitions'

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

  const [mobile, setMobile]= useState(false)

  const checkMobileMode = () => {
     setMobile(window.innerWidth < 768); 
  };

  useEffect(()=>{
    checkMobileMode()
  },[])
 
 return (
    <header className={styles.navbarContainer}>
          {mobile? <NavBarMobile/>:
        <nav className={styles.brandContainer}>
                <Brand/>
                <ul className={styles.itemsNavBarContainer}>
                    {links.map(({ label, route }) => (
                      <li className={styles.navbarItem} key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                    
                    ))}
                            </ul> 
                </nav>
                }
     </header>
        )
}

export default Navigation