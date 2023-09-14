import { Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const CloseButton=({handleGoBack})=>{
    return(
        <Button
        onClick={handleGoBack}
        style={{
          cursor: "pointer",
          color: "black",
          zIndex: 3000, 
        }}
      >
        <CloseIcon style={{fontSize:'25px'}} />
        </Button>
    )
}
export default CloseButton