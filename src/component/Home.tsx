import React from "react";
import { CartState } from "../context/Context";
import { ContextProps } from "../context/Context";
import { ProductsFace } from "../context/Context";
import SingleProducts from "./SingleProducts";

const Home = () => {
  const {
    state: { products },
  } = CartState() as ContextProps;
  console.log(products);
  return (
    <div className="home" style={{ display: "flex" }}>
      <div
        className="productContainer"
        style={{
          display: "flex",
          width: "78%",
          padding: "20px",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((prod: ProductsFace, index: number) => {
          return <SingleProducts prod={prod} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
