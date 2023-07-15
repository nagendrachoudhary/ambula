import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}>
      <Link to="/">
        <div>
          <img
            width={"70px"}
            height={"70px"}
            src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=2000"
          />
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          width: "400px",
          justifyContent: "space-evenly",
          marginRight: "30px",
        }}>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/cart">
          <h4>Cart</h4>
        </Link>
        <Link to="/about">
          <h4>About</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
    </nav>
  );
}
