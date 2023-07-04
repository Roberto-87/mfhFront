import ButtonStart from "./ButtonStart"
import Brand from "./Brand"
import style from './Landing.module.css'
import Link from "next/link"


const Landing=()=>{
    return(
    <div className={style.landingContainer}>
        <ButtonStart/>
     <div className={style.brandContainer}>
        <Link href='/'><h1 className={style.brandLanding} >Maria Ferrari Hardoy</h1></Link>
     </div>
     </div>)
}

export default Landing