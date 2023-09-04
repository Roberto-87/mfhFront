import Link from "next/link"
import styleExhibition from '../CardExhibitions/CardExhibition.module.css'

const ExhibitionLink=({exhibition})=>{
  usE
    return(
        <Link  href={`/exhibitions/${(exhibition?.id)}`}>
        { exhibition.images.map((each, index)=> index< 1 &&
          <div key={index} style={{display:'flex',justifyContent:'center'}}>
            <img style={{width:'80%'}} alt='imagen exhibicion' className={styleExhibition.cardImageExhibition} key={index} src={each.replace('http','https')} srcSet={each.replace('http','https')} /> 
              </div>
        )}
      </Link>
    )
}
export default ExhibitionLink