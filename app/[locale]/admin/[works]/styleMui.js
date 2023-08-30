import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const style = {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    height:700,
    width: 1100,
    bgcolor: 'black',
    boxShadow: 24,
    display:'flex',
    justifyContent:'center'
      
  };

  
 export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
 
  export const styleModalExhibition = {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    height:500,
    width: 1500,
    padding:'2%',
    bgcolor: 'black',
    boxShadow: 24,
    display:'flex',
    justifyContent:'center'
      
  };
