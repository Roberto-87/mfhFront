'use client'
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function Admin() {
const session= useSession({
  required:true,
  onUnauthenticated(){
    redirect('/admin/signin')
  }
})

const{status}=useSession()


if(status==='authenticated'){
  return(
    <div>
    <div style={{display:'flex', justifyContent:'center'}}>
      {session?.data?.user?.email}
     <button onClick={()=> signOut()}>LogOut</button> 
    </div>
    </div>
  )
}
  
}

Admin.requireAuth= true

