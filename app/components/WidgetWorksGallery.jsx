'use client'
import { useEffect } from "react";


const WidgetWorksGallery=(image={work.image} title={work.title} date,material})=>{

    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(()=>{
        cloudinaryRef.current=window.cloudinary;
        widgetRef.current= cloudinaryRef.current.galleryWidget({
            "container": "#my-gallery",
            "cloudName": "mariaferrari",
            "displayProps": {
                "mode": "expanded",
                "columns": 3
            },
            "mediaAssets": [{}]
        });
    },[])

    return (
        <div>
            <div>
                <span className="btn btn-success" onClick={() => widgetRef.current.render()}>Image</span> 
            </div>
        </div>
    )

}

export default WidgetWorksGallery