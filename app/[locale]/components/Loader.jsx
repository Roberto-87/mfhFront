import { AiOutlineLoading3Quarters } from "react-icons/ai"
import style from './Loader.module.css'

const Loader=()=>{
    return(
        <div className="mx-auto d-flex justify-content-center" style={{ width: "100%", marginLeft: '50%',height:'50px', marginTop:'20%' }}>
        <AiOutlineLoading3Quarters className={style.loader} ></AiOutlineLoading3Quarters>
        </div>
    )
}

export default Loader