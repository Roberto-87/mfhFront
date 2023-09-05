import Link from "next/link"
import styleExhibition from '../CardExhibitions/CardExhibition.module.css'
import { imageFormat } from "../../../utils/functions"

const ExhibitionLink=({exhibition})=>{
    return(
        <Link  href={`/exhibitions/active/${(exhibition?.id)}`}>
        { exhibition.images.map((each, index)=> index< 1 &&
          <div key={index} style={{display:'flex',justifyContent:'center'}}>
            <img style={{width:'80%'}} alt='imagen exhibicion' className={styleExhibition.cardImageExhibition} key={index} srcSet={imageFormat(each)} src={imageFormat(each)} /> 
              </div>
        )}
      </Link>
    )
}
export default ExhibitionLink