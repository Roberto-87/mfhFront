'use client'
import React, { useEffect, useState } from 'react';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';
import Link from 'next/link';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
import styles from './NavbarMobile.module.css'
import stylesIcon from '../CardContact/CardContact.module.css'
import {AiOutlineInstagram,AiOutlineMail,AiOutlineFacebook} from 'react-icons/ai'
import {FiMail,FiInstagram}from 'react-icons/fi'
import {MdOutlineAlternateEmail}from 'react-icons/md'

import {PiInstagramLogoLight}from 'react-icons/pi'
import{BsInstagram} from 'react-icons/bs'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import Footer from '../Footer/Footer';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.87)', 
        },
      },
    },
  },
})

const Navbar =() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const currentPathname= usePathname()
 
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const onHandleClick=(e)=>{
    e.stopPropagation()
  }

  return (
    <ThemeProvider theme={theme}>
      <Toolbar >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2}}
          
          >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'0.75em',}}>         
          <Brand/>
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen}  >
      <div style={{width:'100%', display:'flex', justifyContent:'flex-end' }}>
          <CloseIcon onClick={toggleDrawer} style={{fontSize:'35px',fontWeight: 400,lineHeight:'22px',color: '#837c7c'}}/>
      </div>
  <List sx={{ width: '100vw', marginTop:'10%'}}   >
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.1s' }}  onClick={toggleDrawer}>
      <Link className={styles.linkNavbarMobile}  href={'/works'}>    {currentPathname === '/works' ? <strong>WORKS</strong> : 'WORKS'}</Link>
    </ListItem>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.2s' }} onClick={toggleDrawer}>
        <Link className={styles.linkNavbarMobile}  href={'/exhibitions'}> {currentPathname==='/exhibitions'?<strong>EXHIBITIONS</strong>:'EXHIBITIONS'}</Link>
    </ListItem>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.3s' }} onClick={toggleDrawer}>
        <Link className={styles.linkNavbarMobile}  href={'/text'}>   {currentPathname==='/text'?<strong>PAPERS</strong>: 'PAPERS'}</Link>
    </ListItem>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.4s' }} onClick={toggleDrawer}>
     <Link className={styles.linkNavbarMobile}  href={'/bio'}>{currentPathname==='/bio'?<strong> BIO</strong>:'BIO'}</Link>
      </ListItem>    
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.5s' }} onClick={toggleDrawer}>
      <Link className={styles.linkNavbarMobile}  href={'/contact'}>{currentPathname==='/contact'?<strong>CONTACT</strong>:'CONTACT'}</Link>
    </ListItem>

    <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.5s',  width:'100%' , display:'flex'}}>
  <DropdownNavbar onClick={onHandleClick} className={styles.animatedListItem}></DropdownNavbar>
    </ListItem>
   <div >
   </div>
   <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.5s', width:'100%',position:'fixed' ,top:'72%'}} onClick={toggleDrawer}>
     <Box sx={{width:'25%', display:'flex',justifyContent:'space-around', alignItems:'center', position:'fixed', bottom:'12%'}}>
     <Footer  />
   </Box>   




   </ListItem>
   
  </List>
</Drawer>

</ThemeProvider>

  );
};

export default Navbar;
