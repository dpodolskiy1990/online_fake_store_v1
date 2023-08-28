import { useEffect } from "react";
import Small_card from "../Small_card/Small_card";
import "./Body.scss";
import { useState } from "react";
import axios from "axios";

function Body() {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    const fetchFakestoreData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
      } catch (error) {
        console.error("Error fetching fakestore data:", error);
        return [];
      }
    };

    fetchFakestoreData().then((data) => setShop(data));
  }, []);
  return (
    <div className="body">
      <div className="body_title">
        <h2>Catalog</h2>
        <div className="body_title__buttons">
          <button>ALL</button>
          <button>MEN'S CLOTHING</button>
          <button>JEWELRY</button>
          <button>ELECTRONICS</button>
          <button>WOMEN'S CLOTHING</button>
        </div>
      </div>
      <div className="body_catalog">
        {shop && shop.map((item) => <Small_card key={item.id} data={item} />)}
      </div>
    </div>
  );
}

export default Body;
