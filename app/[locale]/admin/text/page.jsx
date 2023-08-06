'use client'
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import { useEffect } from "react";
import Loader from "../../components/Loader";


const Text = () => { 
    const {status}= useSession()
    const router= useRouter()

    if (status === 'unauthenticated') {
      router.push('/text'); 
     } 
 
   if (status === 'loading') {
   return <Loader></Loader>;
 }

    return (
      <div>
        {
          status==='authenticated' &&
        <h1>esto es Admin/documents</h1>
        }
      </div>
    );
  };
  
export default Text
  