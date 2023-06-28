import { useParams } from "react-router-dom"

const Muestra=({params})=>{
    const {id}= params

    return(<h1 >Esta es la muestra {id} </h1>)
}

export default Muestra