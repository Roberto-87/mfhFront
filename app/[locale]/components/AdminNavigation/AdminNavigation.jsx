'use client'
import Link from "next/link";
import styles from './AdminNavigation.module.css'
import { FaImage } from 'react-icons/fa';
import{AiFillHome,AiFillCamera} from 'react-icons/ai';
import {BiLibrary, BiSolidMemoryCard}from 'react-icons/bi';
import {MdTextsms} from 'react-icons/md'
import {RiNewspaperLine} from 'react-icons/ri'
import { signOut, useSession } from "next-auth/react";
import {BiLogOut} from 'react-icons/bi';
import {RiSuitcaseFill} from 'react-icons/ri'
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const links = [
/*   {
    label: "HOME ",
    route: "/admin",
    icon: <AiFillHome/>
  }, */
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
      label: "TEXTS",
      route: "/admin/text",
      icon:<RiNewspaperLine/>
    },
    {
      label: "BIOGRAPHY",
      route: "/admin/bio",
      icon:<BiSolidMemoryCard/>
    },
    {  
    label: "COVER",
    route: "/admin/cover",
    icon:<AiFillCamera/>
   
}, 
 {  
  label: "CONTACT",
  route: "/admin/contact",
  icon: <MdTextsms/>
},
{  
  label: "PORTFOLIO",
  route: "/admin/portfolio",
  icon: <RiSuitcaseFill/>
}
    

  ];

const AdminNavigation=()=>{
  const [user, setUser]=useState()
  const { data: session } = useSession()
  
  if (session) {
    return (
      
      <div className={styles.navbarAdminContainer}>
          {/*   <div style={{marginTop:'2px', display:'flex', justifyContent:'center', padding:'4px', borderRadius:'1%',backgroundColor:'#7070708c' }}> {user}</div> */}
     
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
                             <div className={styles.containerNavBarAdmin} style={{marginTop:'20%'}}>
                                 
                                            <li  style={{cursor:'pointer'}} onClick={()=> signOut()}>LOGOUT </li>
                          <div  className={styles.containerLinksAdmin}>
                          <BiLogOut fontSize={'1.5rem'} onClick={()=> signOut()} style={{cursor:'pointer'}}/>
                      
                          </div>
                          </div>
                

                              </ul> 
                  </nav>
  
            </div>
                  
       </div>
          )

  }

}

module.exports= AdminNavigation