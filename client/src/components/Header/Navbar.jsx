// Dependencies
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack, Button} from "@mui/material";

function Navbar() {
  const navigate = useNavigate(); // Navigate to new endpont

  return (
      // Navbar
      <AppBar position="static">
        <Toolbar>
          
          {/* Title */}
          <Typography edge="start" variant="h6" component="div" sx={{flexGrow: 1}}>
            Bitcoin
          </Typography>
          
          {/* Endpoints */}
          <Stack direction='row' spacing={1}>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/favorite")}>Favorite</Button>
          </Stack>

        </Toolbar>
      </AppBar>
  );
}

export default Navbar;