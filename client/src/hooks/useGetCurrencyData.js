// Dependencies
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// Redux
import { fetchBitcoin } from '../redux/bitcoinSlice'

function useGetCurrencyData() {
  const dispatch = useDispatch();

  // Hooks
  const { data } = useSelector((state) => state.bitcoin);
  const [startDate, setStartDate] = useState(new Date());
  const [toggleCoin, setToggleCoin] = useState(true);

  // Change date
  const handleOnChangeDateInput = (date) => {
    setStartDate(date);
  };

  // USD + ILS Btn
  const handleOnClickDateInput = () => {
    setToggleCoin(!toggleCoin);
  };

  useEffect(() => {
    const date = moment(startDate).format('yyyy-MM-DD') // Convert date format
    dispatch(fetchBitcoin(date)); // Fetch data
  },[dispatch, startDate])

  return { handleOnChangeDateInput, handleOnClickDateInput, startDate, toggleCoin, data }
}

export default useGetCurrencyData