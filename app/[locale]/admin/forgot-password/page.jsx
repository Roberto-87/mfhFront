'use client';
import { useState } from 'react';
import { sendPasswordResetEmail,auth } from "firebase/auth";
import { Box } from '@mui/material';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';


const ForgotPassword=()=> {
  const [email, setEmail] = useState('');
  const [validateEmail, setValidateEmail] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const router= useRouter()

  const resetEmail = async() => {
   await sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log(data)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    swal('Revisa tu correo electrónico')
    router.push('/admin/signin')
  };

  return (
    <Box sx={{display:'flex', justifyContent:'center', height:'100vh', backgroundColor:'black', boxShadow: '0px 4px 8px rgba(200, 177, 177, 0.18)'}} >
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{borderRadius:'1%', padding:'8%',marginTop:'3%',height:'80vh', boxShadow: '0 0 10px #ffffff, 0 0 20px #798079, 0 0 30px #3e413e', animation: 'neon-animation 1.5s infinite alternate'}} >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm " style={{marginTop:'50%'}}>
       <div >
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white" >
              Forgot Password
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setValidateEmail(emailRegex.test(e.target.value));
                  }}
                  required
                  className={`block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
                    validateEmail ? 'border-green-500' : ''
                  }`}
                />
                {email && !validateEmail && <p> ingresá un mail válido</p>}
                </div>
              </div>
  
              <div>
             {validateEmail &&   <button
                  onClick={()=>resetEmail()}
                  disabled={!email}
                  className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send Forgot Password Email
                </button>}
              </div>
            </div>
          </div>
        </div>
  
  
  
       </div>
        </div>
      </div>
    </Box>
  )
}

export default ForgotPassword

