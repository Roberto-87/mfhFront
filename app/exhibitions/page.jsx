import axios from "axios"
import Navigation from "../components/Navigation"

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
        <h2>{exhibition.title}</h2>
        <img src={exhibition.download_url} alt={exhibition.name} />
        <h2>{exhibition.coverImage}</h2>
        <p>{exhibition.body}</p>
       </article> )
       }
        </section>
    ) 
}
export default Exhibitions