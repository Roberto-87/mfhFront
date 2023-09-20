import { Box, Button } from "@mui/material"
import { LiaAngleUpSolid } from "react-icons/lia"


const BackToStart=({handleClick})=>{
    return(
        <Box sx={{position:'fixed', bottom:'10px',zIndex:'10', borderRadius:'50%',width:'100%', height:'5%',display:'flex', justifyContent:'center', padding:'4px',cursor:'pointer' }}>
        <Button style={{color:'white'}} onClick={handleClick}>
            <LiaAngleUpSolid style={{fontSize:'2.4em'}}/>
        </Button>
        </Box>
    )
}

export default BackToStart