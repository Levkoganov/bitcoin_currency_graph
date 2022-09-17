// Dependncies
import { Grid } from "@mui/material";
import CardLayout from "./CardLayout";

// Create grid layout component
function GridLayout({ favoriteDates }) {
  
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {favoriteDates.map((dates, index) => (
        <Grid item xs={12} sm={4} md={3} key={index}>
          <CardLayout dates={dates} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GridLayout;
