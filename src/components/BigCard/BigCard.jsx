import "./BigCard.scss";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import AddButtonOnCart from "../AddButtonOnCart/AddButtonOnCart";
import { removePopUp } from "../../store/bigCartSlice";
import CountButton from "../CountButton/CountButton";
import AddButtonToFavorite from "../AddButtonToFavorite/AddButtonToFavorite";

function BigCard() {
  const dispatch = useDispatch();
  const bigCardRef = useRef(null);
  const cartNumber = useSelector((state) => state.bigCartSlice.bigCart);
  const fullCartList = useSelector((state) => state.bigCartSlice.shopData);
  const cart = fullCartList.find((item) => item.id === cartNumber);
  const card = "big";
  const removeCart = (event) => {
    if (event.target === bigCardRef.current) {
      dispatch(removePopUp());
    }
  };
  return (
    <div className="bigcard" ref={bigCardRef} onClick={removeCart}>
      <div className="cardFullSize">
        <div className="cardFullSize_img">
          <img src={cart.image} alt={cart.title} />
        </div>
        <div className="cardFullSize_info">
          <h2>{cart.title}</h2>
          <div className="cardFullSize_info__rate">
            <div>
              <img src="./img/star.svg" alt="star" />
              {cart.rating.rate}
            </div>
          </div>
          <div className="cardFullSize_info__cost">$ {cart.price}</div>
          <div className="cardFullSize_info__count">
            <CountButton titleForButton={"-"} idFor={cart.id} />
            <span>{cart.counter}</span>
            <CountButton titleForButton={"+"} idFor={cart.id} />
            <AddButtonOnCart id={cart.id} />
          </div>
          <div className="cardFullSize_info__discription">
            {cart.description}
          </div>
        </div>
        <AddButtonToFavorite card={card} id={cart.id} />
      </div>
    </div>
  );
}

export default BigCard;
