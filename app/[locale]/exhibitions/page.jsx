import CardExhibitions from '../components/CardExhibitions/CardExhibitions';
import getData from '../hooks/getData';
import { EXHIBITIONS} from '../../utils/consts';

const fetchData = async () => {
  const worksData = await getData(`${EXHIBITIONS}/active`);
     if (!worksData) {
     throw new Error('Failed to fetch data')
}
    return worksData
 };  

 const Exhibitions = async () => {
  const exhibitions= await fetchData()

    return (< >
        <CardExhibitions exhibitions={exhibitions} />
        </>
        )
}
export default Exhibitions