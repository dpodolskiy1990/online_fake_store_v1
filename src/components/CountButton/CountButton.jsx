import { useDispatch } from "react-redux";
import "./CountButton.scss";
import {
  CartCounterDecrease,
  CartCounterIncrease,
} from "../../store/bigCartSlice";

const CountButton = ({ titleForButton, idFor }) => {
  const dispatch = useDispatch();
  function forReducers() {
    if (titleForButton === "-") {
      return dispatch(CartCounterDecrease(idFor));
    } else {
      return dispatch(CartCounterIncrease(idFor));
    }
  }
  return (
    <button className="countButton" onClick={() => forReducers()}>
      {titleForButton}
    </button>
  );
};

export default CountButton;
