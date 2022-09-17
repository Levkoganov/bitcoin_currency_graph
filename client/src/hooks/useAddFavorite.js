// Dependencies
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/bitcoinSlice";

function useAddFavorite() {
  const dispatch = useDispatch();

  // Add favorite date to redux state
  const handleOnClickFavorite = (date) => {
    dispatch(addFavorite(date));
  }

  return { handleOnClickFavorite };
}

export default useAddFavorite;
