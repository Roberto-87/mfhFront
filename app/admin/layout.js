"use client";
import * as React from "react";

/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); */

export default function BasicGrid({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Maria Ferrari Hardoy- Artista Visual</title>
      </head>
      <body>{children}</body>
    </html>
  );

  /* (
    <Box sx={{ flexGrow: 3, alignContent: "center", marginLeft: "4px" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item sx={{ marginTop: "6px" }}>
            <AdminNavigation />
          </Item>
        </Grid>
        <Grid item xs={10} container spacing={1} sx={{ marginTop: "6px" }}>
          <Item>
            <Navigation />
          </Item>
        </Grid>
      </Grid>
    </Box>
  ); */
}
