import "./App.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShopData } from "../../store/bigCartSlice";
import BigCard from "../BigCard/BigCard";
import Body from "../Body/Body";
import Header from "../Header/Header";

function App() {
  const cart = useSelector((state) => state.bigCartSlice.bigCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopData());
  }, []);

  useEffect(() => {
    if (cart) {
      const bodyScrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${bodyScrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }, [cart]);

  return (
    <div className="app">
      <Header />
      <Body />
      <div>footer</div>
      {cart ? <BigCard /> : null}
    </div>
  );
}

export default App;
