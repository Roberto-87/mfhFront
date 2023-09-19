import { AiOutlineLoading3Quarters } from "react-icons/ai"
import style from './LoaderAnimation.module.css'

const Loader=()=>{
    return(
        <div className="mx-auto" style={{ width: "100%", color:'black' }}>
            <AiOutlineLoading3Quarters className={style.loader} ></AiOutlineLoading3Quarters>
        </div>
    )
}

export default Loader