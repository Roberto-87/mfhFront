import Link from "next/link";
import Navigation from "/app/[locale]/components/Navigation/Navigation.jsx";
import Brand from "../app/[locale]/components/Brand/Brand";


export default function Custom404() {
   return (
        <div>
           <Brand style={{textDecoration:'none'}}/>
{/*           <Navigation  style={{textDecoration:'none', color:'black'}}/> */}
          <div style={{ display: "flex", justifyContent: "center", marginTop:'5%' }}>
            <h2>
              <strong>404</strong>
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>PAGE NOT FOUND</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/" style={{textDecoration:'none', color:'black', border: '1px solid black', borderRadius:'2%', padding:'1%'}}>
               <strong>Back to Home</strong>{" "}
            </Link>
          </div>
        </div>
      );
  }


