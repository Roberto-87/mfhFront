import Link from "next/link"
import styleExhibition from '../CardExhibitions/CardExhibition.module.css'
import { imageFormat } from "../../../utils/functions"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'

const ExhibitionLink=({exhibition,handleImageLoad})=>{
    return(
        <Link  href={`/exhibitions/${(exhibition?.id)}`}>
        { exhibition.images.map((each, index)=> index< 1 &&
          <div key={index} style={{display:'flex',justifyContent:'center'}}>
            <LazyLoadImage onLoad={handleImageLoad} loading="lazy" effect="opacity" style={{width:'80%'}} alt='imagen exhibicion' className={styleExhibition.cardImageExhibition} key={index} srcSet={imageFormat(each)} src={imageFormat(each)} /> 
              </div>
        )}
      </Link>
    )
}
export default ExhibitionLink