import styles from './Brand.module.css'
import Link from "next/link";

const Brand=()=>{
 return(
  <div  className={styles.brandContainer}>
    <Link href='/'><h1 className={styles.brandName} >Maria Ferrari Hardoy</h1></Link>

  </div>
   
    )
}

export default Brand
