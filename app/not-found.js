import Link from 'next/link'
import Navigation from './components/Navigation'

 
export default function NotFound() {
  return (
    <div>
      <Navigation/>      
        <div style={{display:'flex', justifyContent:'center'}}>
        <h2><strong>404</strong></h2>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <p>Página no encontrada</p>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Link href="/">Ir a <strong>Inicio</strong> </Link>
        </div>

    </div>
  )
}