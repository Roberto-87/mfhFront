'use client'
import {  useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import getData from "../hooks/getData"
import { BASE_URL, CONTACT, COVER, EXHIBITIONS, PORTFOLIO, TEXT, WORKS } from "../../utils/consts"


export default function Admin() {
  const [user, setUser]=useState()



const session= useSession({
  required:true,
   onUnauthenticated(){
    redirect('/admin/signin')
  } 
}) 

useEffect(()=>{
  setUser(session.data?.user?.email.split('@')[0])

},[])

const{status}=useSession()

if(status==='unauthenticated'){
redirect('admin/signin')
}  

 if(status==='authenticated'){
  return(
    <div>
    <div style={{display:'flex', justifyContent:'flex-end', color:'black',paddingRight:'1%'}}>
      {user}
    </div>
    </div>
  )
} 
  
}

 Admin.requireAuth= true 

