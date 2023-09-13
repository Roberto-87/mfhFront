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
import { set } from "date-fns";

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

  const Navigation = () => {
    const currentPathName = usePathname();
    const withoutNavbar = ['/admin', '/', '/en', '/es', '/admin/exhibitions', '/admin/portfolio', '/admin/text', '/admin/biography', '/admin/cover', '/admin/contact', '/admin/works', '/admin/bio', '/admin/signin', '/admin/forgotPassword'];
    const [mobile, setMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
    const [scrolling, setScrolling] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [actScrollY, setActScrollY] = useState(0);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
       if(currentScrollY > 0){
         setScrolling(true);
         setPrevScrollY(currentScrollY)
        } else if(currentScrollY < prevScrollY ) {
          setScrolling(false);
       }
   } 

    useEffect(() => {
      const handleResize = () => {
        setMobile(window.innerWidth < 768);
      };  
      window.addEventListener('resize', handleResize);
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      }
    }, [scrolling, mobile]);

  
    return (
      !withoutNavbar.includes(currentPathName) ?
        <header className={`${styles.navbarContainer} `}>
          {mobile ? <NavBarMobile />
            :
            <nav className={`${styles.brandContainer} `}>
              <Brand />
              {links.map(({ label, route }) => (
                <li className={styles.navbarItem} key={route}>
                  {route === currentPathName ? <Link className={comfortaa.className} href={route}><strong>{label}</strong></Link> :
                    <Link href={route}>{label}</Link>
                  }
                </li>
              ))}
              <li className={styles.navbarItem}><DropdownNavbar /></li>
            </nav>
          }
        </header>
        :
        null
    )
  }
  
  export default Navigation;