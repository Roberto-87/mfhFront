import {styled, Paper} from "@mui/material"


export const style = {
    position: 'absolute',
    top: '1%',  
/*     right: '15%',   */
    width: 1350,
    height:600,
/*     bgcolor: 'background.paper', */
    boxShadow: 24,
    p: 2, 
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
    zIndex:'100'
  };

  export const styleModalCuratorial = {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 550,
    width:'100%',
    bgcolor: 'background.paper', 
    boxShadow: 24,
    display:'flex',
    justifyContent:'center'
  };
  export const stylePaper = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 550,
    width:'100%',
    bgcolor: 'background.paper', 

    display:'flex',
    justifyContent:'center'
  };