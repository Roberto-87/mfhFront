'use client'
import {  useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import FormSignIn from "../components/formSingIn/FormSignIn"


export default function Admin() {

const session= useSession({
  required:true,
   onUnauthenticated(){
    redirect('/admin/signin')
  } 
}) 
const{status}=useSession()

if(status==='unauthenticated'){
redirect('admin/signin')
}  

 if(status==='authenticated'){
  return(
    <div>
    <div style={{display:'flex', justifyContent:'center'}}>
      Sesión iniciada: 
      {session?.data?.user?.email}
    </div>
    </div>
  )
} 
  
}

/* Admin.requireAuth= true */

