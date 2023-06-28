const axios= require('axios')

const fetchWorks=async()=>{
    const response= await axios('http://localhost:3001/works')
    return response.data
}

const Works=async()=>{
    const works= await fetchWorks()
    
    return (<div>
        <h2>Works</h2>
        {works.map(work=> <li key={work.id}>{work.title}<hr/></li> )}

    </div>)
 }

 export default Works