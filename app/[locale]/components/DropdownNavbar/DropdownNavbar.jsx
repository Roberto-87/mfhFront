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


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
    const[spanishPortfolio, setSpanishPortfolio]=useState()
    const[englishshPortfolio, setEnglishshPortfolio]=useState()


  useEffect(() => {
     const fetchData=async()=>{
        try {
          const response= await getData(PORTFOLIO)
          if(!response) throw new Error('no se encontraron portfolios')
          const spanishPortfolios = response.filter(portfolio => portfolio.language === 'Español');
          const englishPortfolios = response.filter(portfolio => portfolio.language === 'Ingles');
        
          setSpanishPortfolio(spanishPortfolios[0].image);
          setEnglishshPortfolio(englishPortfolios[0].image);
          
        } catch (error) {
            return {error:error.message}
        }
     }   
     fetchData()
  }, []) 

  return (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className={`${styles.containerPortfolio}${comfortaa.className}`} >
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 " style={{display:'flex',flexDirection:'column', position:'fixed'}}>
            <Menu.Item>
              {({ active }) => (
                <a href={spanishPortfolio} target="_blank" download class={comfortaa.className} className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Descargar PDF ES
                </a>
              )}
            </Menu.Item>
            <Divider />
            <Menu.Item>
              {({ active }) => (
                <a href={englishshPortfolio} target="_blank" download className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                   Descargar PDF EN
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
