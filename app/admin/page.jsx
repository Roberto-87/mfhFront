import * as React from 'react';
import Landing from '../components/Landing';
import Admin from './layout';


const Home=({children})=>{
    return(
        <div className={{display:'flex', flexDirection:'row'}}>
           <h1>alog</h1>
           {children}
        </div>
    )
}

export default Home