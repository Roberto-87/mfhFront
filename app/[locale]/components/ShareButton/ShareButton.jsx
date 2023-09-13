const { Button } = require("@mui/material")
import {AiOutlineShareAlt} from 'react-icons/ai'

const ShareButton=()=>{
    return(
      <div style={{display:'flex', width:'50%'}}>
      <Button  size="small" style={{color:'#585858ae', border:'#585858ae 0.1px solid', padding:'4px', letterSpacing:'2px'}}>
SHARE
            <AiOutlineShareAlt/>
        </Button>
      </div>
        
    )
}
export default ShareButton