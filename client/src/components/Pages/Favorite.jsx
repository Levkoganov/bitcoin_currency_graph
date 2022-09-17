// Dependencies
import { useSelector } from "react-redux";
import { Container, Box } from "@mui/material";

// Components
import GridLayout from "../GridLayout";

function Favorite() {
  // Hooks
  const { favoriteDates } = useSelector((state) => state.bitcoin);
  
  return (
    <Box sx={{ m: 4 }}>
      <Container>
        { favoriteDates.length > 0
          ? <GridLayout favoriteDates={favoriteDates}/>
          : "Please add a favorite to view this content..."
        }
      </Container>
    </Box>
  );
}

export default Favorite;
