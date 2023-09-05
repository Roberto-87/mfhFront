'use client'
import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";
import {TEXT} from '../../utils/consts'
import { textOrdered } from '../../utils/functions';

const fetchData = async () => {
  const papersData = await getData(`${TEXT}/active`);
  if(!papersData)throw new Error('error al obtener los textos')
  const orderedPapers= textOrdered(papersData)
  const textHttpsFormat= orderedPapers.map((item)=> item.image.replace('http', 'https'))
  return textHttpsFormat
};    

const Text = async() => {
    const papers= await fetchData()

return (< > 
        <CardText texts={papers} />
        </>
        )
}
export default Text
