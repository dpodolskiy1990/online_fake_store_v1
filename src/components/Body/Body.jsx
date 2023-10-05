import "./Body.scss";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Small_card from "../Small_card/Small_card";
import { fetchShopData } from "../../store/bigCartSlice";

function Body() {
  const shopData = useSelector((state) => state.bigCartSlice.shopData);
  const [category, setCategory] = useState("");

  return (
    <div className="body">
      <div className="body_title">
        <h2>Catalog</h2>
        <div className="body_title__buttons">
          <button onClick={() => setCategory("")}>ALL</button>
          <button onClick={() => setCategory("men's clothing")}>
            MEN'S CLOTHING
          </button>
          <button onClick={() => setCategory("jewelery")}>JEWELRY</button>
          <button onClick={() => setCategory("electronics")}>
            ELECTRONICS
          </button>
          <button onClick={() => setCategory("women's clothing")}>
            WOMEN'S CLOTHING
          </button>
        </div>
      </div>
      <div className="body_catalog">
        {shopData &&
          shopData
            .filter((item) => (category ? item.category == category : item))
            .map((item) => <Small_card key={item.id} data={item} />)}
      </div>
    </div>
  );
}

export default Body;
