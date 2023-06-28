import styles from './Brand.module.css'
import Link from "next/link";

const Brand=()=>{
    return(
        <div className={styles.brandName}>
            <Link href='/'><h1 >Maria Ferrari Hardoy</h1></Link>
        </div>
    )
}

export default Brand