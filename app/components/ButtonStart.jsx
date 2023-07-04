'use client'
import { Button } from "@mui/material"
import style from './ButtonStart.module.css'
import Link from "next/link"



const ButtonStart=()=>{
    return (
        <div className={style.containerStartButton}>
            <Link href={'works'}><Button variant="outlined"  sx={{ color: 'black', backgroundColor: 'transparent', borderColor: 'black' }} >EN</Button></Link>
            <Link href={'works'}><Button variant="outlined"  sx={{ color: 'black', backgroundColor: 'transparent', borderColor: 'black' }} >ES</Button></Link>
            
        </div>
    )
}

export default ButtonStart;