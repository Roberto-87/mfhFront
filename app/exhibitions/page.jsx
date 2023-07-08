import axios from "axios"
import Navigation from "../components/Navigation"
import Link from "next/link"

const fetchExhibitions=async()=>{
    const response= await axios('http://localhost:3001/exhibitions')
    return response
} 

const Exhibitions=async()=>{
     const exhibitions= await fetchExhibitions() 
      
    return(
        <section>
            <Navigation/>
           <h1 id="exhibitions">Exhibitions</h1>
       { exhibitions?.data.map(exhibition=> <article key={exhibition.id}>
        <h2>Title: {exhibition.title}</h2>
        <Link href={`/texto/${exhibition.title}`}>Texto curatorial</Link>
        <h2>{exhibition.coverImage}</h2>
        <p>{exhibition.body}</p>
        <img src={exhibition.url} alt={exhibition.name} />
       </article> )
       } 
        </section>
    ) 
}
export default Exhibitions