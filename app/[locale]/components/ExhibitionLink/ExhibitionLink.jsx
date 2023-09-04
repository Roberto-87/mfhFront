import Link from "next/link"
import styleExhibition from '../CardExhibitions/CardExhibition.module.css'

const ExhibitionLink=({exhibition})=>{
    return(
        <Link  href={`/exhibitions/${(exhibition?.id)}`}>
        { exhibition.map((each, index)=> index< 1 &&
          <div key={index} style={{display:'flex',justifyContent:'center'}}>
            <img style={{width:'80%'}} alt='imagen exhibicion' className={styleExhibition.cardImageExhibition} key={index} src={each} /> 
              </div>
        )}
      </Link>
    )
}
export default ExhibitionLink