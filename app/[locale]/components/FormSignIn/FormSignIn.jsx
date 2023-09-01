'use client';
import { Box } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormSignIn=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false); 
    const router = useRouter();
   
    return (
      <Box sx={{display:'flex', justifyContent:'center', height:'100vh', backgroundColor:'black'}} >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{borderRadius:'1%', padding:'2%',marginTop:'3%',height:'85vh', boxShadow: '0 0 10px #ffffff, 0 0 20px #798079, 0 0 30px #3e413e', animation: 'neon-animation 1.5s infinite alternate'}} >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm " style={{marginTop:'50%'}}>
         <div >
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
  
         </div>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <div className="space-y-6 ">
              <div  >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2 ">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
             <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
{/*                   <div className="text-sm">
                    <div onClick={() => router.push('/admin/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300" style={{cursor:'pointer'}}>
                      Forgot password?
                    </div>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> 
  
              <div>
                <button
                  onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/admin/works'})}
                  
                  disabled={!email || !password}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
                {email && isInvalid && <p style={{color:'red'}}>Los datos ingresados no son válidos </p>}
              </div>
            </div>
          </div>
        </div>
      </Box>
    )
}

export default FormSignIn