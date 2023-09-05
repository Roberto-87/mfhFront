import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks/CardWorks";
import {WORKS} from '../../utils/consts.js'
import { getDimensions } from '../../utils/functions';

const fetchData = async () => {
  const worksData = await getData(`${WORKS}/active`);
  if(!worksData)throw new Error('Failed to fetch data')
  return worksData
};  

const Works = async() => {
 const works= await fetchData()
    return (< > 
           <CardWorks works={works} />
           </>
        )
}
export default Works