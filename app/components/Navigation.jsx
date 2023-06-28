import Link from "next/link";
import styles from './Navigation.module.css'

const links = [
    {
      label: "Bio",
      route: "/bio",
    },
     {
      label: "Home",
      route: "/",
    },
    {
      label: "Exhibitions",
      route: "/exhibitions",
    },
    {
      label: "Contact",
      route: "/contact",
    },
    {
      label: "Works",
      route: "/works",
    },
    {
      label: "Text",
      route: "/text",
    },
    

  ];


const Navigation=()=>{
 
 return (
    <header>
        <nav>
                <ul className={styles.navbarContainer}>
                    {links.map(({ label, route }) => (
                    <li className={styles.navbarItem} key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                    ))}
                </ul>
                </nav>
     </header>
        )
}

export default Navigation