import { useRef, useState } from "react";
import "./Small_card.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  CartCounterDecrease,
  CartCounterIncrease,
  addPopUp,
} from "../../store/bigCartSlice";
import AddButtonOnCart from "../AddButtonOnCart/AddButtonOnCart";
import AddButtonToFavorite from "../AddButtonToFavorite/AddButtonToFavorite";

function Small_card({ data }) {
  const dispatch = useDispatch();
  const card = "small";
  return (
    <div className="small_card" onClick={() => dispatch(addPopUp(data.id))}>
      <img src={data.image} alt={data.tittle} className="small_card__img" />
      <h3>{data.title}</h3>
      <h5>
        <img src="./img/star.svg" alt="star" />
        {data.rating.rate}
      </h5>
      <h6>$ {data.price}</h6>
      <div className="small_card__counter">
        <div>
          <button
            disabled={data.counter < 1}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(CartCounterDecrease(data.id));
            }}
          >
            -
          </button>
          <span>{data.counter}</span>
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(CartCounterIncrease(data.id));
            }}
          >
            +
          </button>
        </div>
        <div>
          <AddButtonOnCart id={data.id} />
        </div>
      </div>
      <AddButtonToFavorite id={data.id} card={card} />
    </div>
  );
}

export default Small_card;
