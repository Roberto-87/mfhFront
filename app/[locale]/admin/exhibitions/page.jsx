'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import  Loader  from '../../components/Loader';

const Exhibitions = () => {
  const router = useRouter();
  const { status } = useSession()

  if (status === 'unauthenticated') {
    router.push('/exhibitions'); 
   } 

 if (status === 'loading') {
 return <Loader></Loader>;
}

    return (
      <div>
        {status === 'authenticated' &&

        <h1>esto es Admin/Exhibitions</h1>
      }  
      </div>
    );
  };
  
export default Exhibitions
  