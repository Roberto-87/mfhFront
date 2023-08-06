'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Loader from "../../components/Loader";


const Cover = () => {
  const{status} = useSession()
  const router= useRouter()

  if (status === 'unauthenticated') {
    router.push('/'); 
   } 

 if (status === 'loading') {
 return <Loader></Loader>;
}

  if(status==='authenticated'){
    return (
     <div>
       <h1>esto es Admin/cover</h1>
     </div>
   );
  }
  };
  
export default Cover
  