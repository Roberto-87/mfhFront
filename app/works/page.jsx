import axios from "axios"
import Navigation from '../components/Navigation'

/* const fetchWorks=async()=>{
    const response= await axios('http://localhost:3001/works')
    return response.data
} */

const Works=async()=>{
/*     const works= await fetchWorks() */
    
    return    <section>
    <Navigation/>
   <h1 id="works">Works</h1>
     {/*    { works?.map(exhibition=> <article key={exhibition.id}>
        <h2>{exhibition.title}</h2>
        <img src={exhibition.download_url} alt={exhibition.name} />
        <h2>{exhibition.coverImage}</h2>
        <p>{exhibition.body}</p>
        </article> )
        } */}
</section>
 }

 export default Works