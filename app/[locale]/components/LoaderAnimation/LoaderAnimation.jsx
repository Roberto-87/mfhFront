import { AiOutlineLoading3Quarters } from "react-icons/ai"
import style from './LoaderAnimation.module.css'

const Loader=()=>{
    return(
        <div className="mx-auto d-flex justify-content-center" style={{ width: "100%",height:'50px', marginTop:'20%', display:'flex', justifyContent:'center', color:'black' }}>
        <AiOutlineLoading3Quarters className={style.loader} ></AiOutlineLoading3Quarters>
        </div>
    )
}

export default Loader