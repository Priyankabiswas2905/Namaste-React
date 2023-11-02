import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import biryani from "./assets/biryani.jpeg";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Restaurants />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={logo} alt="Your SVG" />
      <div className="nav-items">
        <ul>
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurants = () => {
  return (
    <div className="card-container">
      <div className="search-bar">Search</div>
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <img className="restarant-photo" src={biryani} alt="food-image" />
      <div className="restaurant-name">Meghana Biryani</div>
      <span className="cuisine">North-Indian, Chinese</span>
      <div className="more">
        <span className="time">38 mins</span>
        <span className="rating">4.4</span>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
