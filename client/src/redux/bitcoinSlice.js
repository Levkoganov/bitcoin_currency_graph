// Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

// State
const initialState = {
  data: [],
  favoriteDates: [],
  loading: false
}

const bitcoinSlice = createSlice({
  name: 'bitcoin',
  initialState,

  reducers: {
    // Add payload into favoriteDates
    addFavorite: (state, action) => {
      state.favoriteDates = [...state.favoriteDates, action.payload]
    },
  },

  // Set data state into api payload
  extraReducers(builder) {
    // Pending
    builder.addCase(fetchBitcoin.pending, (state) => {
      state.loading = true
    })
    //Fulfilled
    builder.addCase(fetchBitcoin.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
  }
})

// Fetch endpoint
export const fetchBitcoin = createAsyncThunk("bitcoin/getBitcoin", async (startDate) => {
  const { data } = await axios(`http://localhost:5000/bitcoin/${startDate}`);
  return data
});

export const { addFavorite } = bitcoinSlice.actions
export default bitcoinSlice.reducer