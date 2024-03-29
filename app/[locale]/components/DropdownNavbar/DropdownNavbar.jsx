'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { comfortaa } from "../../fonts/fonts"
import getData from '../../hooks/getData'
import { PORTFOLIO } from '../../../utils/consts'
import styles from '../ButtonsPortfolio/ButtonsPortfolio.module.css'
import { Divider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AiOutlineCloudDownload} from 'react-icons/ai'

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.87)', 
          color:'black'
        },
      },
    },
  },
})
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
    const[spanishPortfolio, setSpanishPortfolio]=useState(null)
    const[englishPortfolio, setEnglishPortfolio]=useState(null)


  useEffect(() => {
     const fetchData=async()=>{
        try {
          const response= await getData(`${PORTFOLIO}/active`)
          if(!response) throw new Error('no se encontraron portfolios')
          setSpanishPortfolio(response.filter(portfolio => portfolio.language == 'Español'  ))
          setEnglishPortfolio(response.filter(portfolio => portfolio.language === 'Ingles'))
        } catch (error) {
            return {error:error.message}
        }
     }   
     fetchData()
  }, []) 

  return (
    <ThemeProvider theme={theme}>
      
    <Menu as="div" className="relative block text-left" >
   
        <Menu.Button style={{color:'white',   padding:'3px'}} className={`${styles.containerPortfolio}${comfortaa.className}`} >
           PORTFOLIO
        </Menu.Button>
  
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items  className="absolute right-50 z-10 mt-2 w-100 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 " style={{  display:'flex', position:'fixed', flexDirection:'column',justifyContent:'flex-end' }}>
        {  spanishPortfolio && spanishPortfolio.length > 0 &&
            <Menu.Item sx={{width:'100%'}}>
              {({ active }) => (
                <a href={spanishPortfolio[0].image} target="_blank" download style={{fontSize:'14px',marginBottom:'1px',color: '#746d6d '}} className={`${comfortaa.className}${classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}`}
                >
                  <AiOutlineCloudDownload style={{fontSize:'20px',color: '#746d6d '}}/> PDF ES
                </a>
              )}
            </Menu.Item> }

          {englishPortfolio &&  englishPortfolio.length>0 &&
           <Menu.Item sx={{width:'100%', backgroundColor:'red'}}>
              {({ active }) => (
                
                <a href={englishPortfolio[0].image} target="_blank"  download style={{fontSize:'14px',marginBottom:'1px',color: '#746d6d ',width:'100%' }} className={`${comfortaa.className}${classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}`}
                >
                   <AiOutlineCloudDownload style={{fontSize:'20px',color: '#746d6d '}}/> PDF EN
                </a>
              )}
            </Menu.Item>
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </ThemeProvider>
  )
}
