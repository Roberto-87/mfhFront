"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AdminNavigation from "../components/AdminNavigation";
import FormUploadWork from "../components/FormUploadWork";
import Navigation from "../components/Navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 3, alignContent: "center", marginLeft: "4px" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item sx={{ marginTop: "6px" }}>
            <AdminNavigation />
          </Item>
        </Grid>
        <Grid item xs={9} container spacing={1} sx={{ marginTop: "6px" }}>
          <Item>
            <Navigation />
            <FormUploadWork />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
