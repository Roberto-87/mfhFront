'use client'

import AdminNavigation from '../../components/AdminNavigation'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navigation from "../../components/Navigation";
import FormUploadWork from '../../components/FormUploadWork';

const Works = () => {
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 3, alignContent: "center", marginLeft: "4px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} md={2}>
          <Item sx={{ marginTop: "6px" }}>
            <AdminNavigation />
          </Item>
        </Grid>
      
        <Grid item xs={8}  container spacing={1} sx={{ marginTop: "6px" }}>
          <Item>
            <Navigation />
<FormUploadWork></FormUploadWork>
          </Item>
        </Grid>
      </Grid>
      
    </Box>

  
  );
};

export default Works;
