import {ProgressBar}from 'react-loader-spinner'

const LoaderBar=()=>{
    return(
        <ProgressBar
            height="2"
            width="500"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#F4442E'
            barColor = 'black'
/>
    )
}
export default LoaderBar