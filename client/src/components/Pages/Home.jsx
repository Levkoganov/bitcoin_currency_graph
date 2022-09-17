// Dependencies
import DatePicker from "react-datepicker";
import { Container, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

// Components and hooks
import Chart from "../Chart";
import useGetCurrencyData from "../../hooks/useGetCurrencyData";
import useAddFavorite from "../../hooks/useAddFavorite";

// Style
import 'react-datepicker/dist/react-datepicker.css'

function Home() {
  // Hooks
  const { handleOnChangeDateInput, handleOnClickDateInput, startDate, toggleCoin, data } = useGetCurrencyData();
  const { handleOnClickFavorite } = useAddFavorite();
  const { favoriteDates, loading } = useSelector((state) => state.bitcoin);
  
  return (
    <Box sx={{ m: 4 }}>
      <Container>
        { !loading ? <div>

          {/* Date input */}
          <DatePicker
            wrapperClassName="datePicker" 
            selected={startDate}
            onChange={(date) => handleOnChangeDateInput(date)}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
          />

          {/* Display btns or error */}
          { !data.error ? 
          <Box>
            <Button variant="outlined" onClick={handleOnClickDateInput}>{toggleCoin ? "USD" : "ILS"} </Button>
            { favoriteDates.find((FavoriteDates) => FavoriteDates === data.date) 
              ? <Button variant="contained" disabled>IN FAVORITE</Button> 
              : <Button variant="contained" onClick={() => handleOnClickFavorite(data.date)}> Add To Favorite </Button> }   
            <p> Current coin: {toggleCoin ? "ILS" : "USD"} </p>
          </Box> : data.error }
          
          {/* Chart component */}
          { data.currency && <Chart bitcoinData={data.currency} toggleCoin={toggleCoin} /> }

        </div> : "loading..." }
      </Container>

    </Box>
  );
}

export default Home;