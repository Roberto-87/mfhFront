import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";
import {TEXT} from '../../utils/consts'
import { textOrdered } from '../../utils/functions';

const fetchData = async () => {
  const papersData = await getData(`${TEXT}/active`);
  if(!papersData) throw new Error('no one text data')
  const orderedPapers= textOrdered(papersData)
  return orderedPapers
};

const Texts =async () => {  
    const papers= await fetchData();  

    return (< > 
        <CardText texts={papers} />
        </>
        )
}
export default Texts
