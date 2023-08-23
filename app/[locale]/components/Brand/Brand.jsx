import styles from './Brand.module.css'
import Link from "next/link";
import { Mplus1} from '../../fonts/fonts'

const Brand=()=>{
 return(
  <div  className={styles.brandContainer}>
    <Link href='/'><h1 className={Mplus1.className} >MARIA FERRARI HARDOY</h1></Link>

  </div>
   
    )
}

export default Brand
