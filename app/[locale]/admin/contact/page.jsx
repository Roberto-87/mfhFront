'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../../components/Loader";


const Contact = () => {
const {status}= useSession()
const router= useRouter()

if (status === 'unauthenticated') {
  router.push('/contact'); 
 } 

if (status === 'loading') {
return <Loader></Loader>;
}

if(status==='authenticated'){
  return (
      <div>
        <h1>esto es Admin/contact</h1>
      </div>
    );
  }

  };
  
export default Contact
  