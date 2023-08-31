'use client'
import { Box } from "@mui/material"
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks"
import { Item } from "../[works]/styleMui"
import FormWorksUpload2 from "../../components/FormUploadWork/formWorksUpload2"
import FormUploadWork from '../../components/FormUploadWork/FormUploadWork'
import { PORTFOLIO } from "../../../utils/consts"

const Portfolio=()=>{
    return(
<Box>
  <Item>
    <AdminActiveWorks title={'Porfolio'} fetchingData={PORTFOLIO}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork folder="Portfolio" title='Portfolio'/>
  </Item>
</Box>
        
    )
}
export default Portfolio