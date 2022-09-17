// Material UI components
import {
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";

// Card layout component
function CardLayout({dates}) {
  
  return (
    <Card sx={{ minWidth: 275 }}>

      <CardContent>
        <Typography variant="body1">Favorite date</Typography>
      </CardContent>

      <CardActions>
        <h5>{dates}</h5>
      </CardActions>
      
    </Card>
  );
}

export default CardLayout;
