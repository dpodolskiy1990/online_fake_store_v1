import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="./img/pop-up-shop.png" alt="logo" />
        Online Shop
      </div>
      <div className="header_links">
        <a href="#">
          <img src="./img/heart.svg" alt="heart" />
        </a>
        <a href="#">
          <img src="./img/basket_empty.svg" alt="basket" />
        </a>
      </div>
    </header>
  );
}

export default Header;
