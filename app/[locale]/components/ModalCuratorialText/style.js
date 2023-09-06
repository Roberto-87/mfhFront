import {styled, Paper} from "@mui/material"


export const style = {
    position: 'absolute',
    top: '5%',  
/*     right: '15%',   */
    width: 950,
    height:550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1, 
    transition: 'transform 0.5s ease', 
    transform: 'scale(1)',
  };

 export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export const styleText = {
    position:'relative',   
  };