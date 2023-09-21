import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
  /*   backgroundColor: 'transparent', */
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:'none'
  }));

 export const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'black',
    boxShadow: 24,
      
  };  


  export const styleCarrouselWorks = {
    position: 'fixed', // Mantener el modal fijo
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '110vw',
    boxShadow: 24,
    backgroundColor: 'white',
    padding:'1%',
   
  }; 

  export const styleCarrouselExhibitions = {
    position: 'fixed', // Mantener el modal fijo
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '380vw',
    boxShadow: 24,
    backgroundColor: 'white',
    padding:'1%',
   
  }; 