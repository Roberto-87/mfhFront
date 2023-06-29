import ButtonStart from "./ButtonStart"
import Brand from "./Brand"
import style from './Landing.module.css'

const Landing=()=>{
    return(
    <div className={style.landingContainer}>
        <ButtonStart/>
     <div className={style.brandContainer}>
        <Brand/>
     </div>
     </div>)
}

export default Landing