import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { MyContext } from "./../../App";
import ContextAll from "./Context";

function Cart() {
  function handleClick(event) {
    console.log(event.target.id);
  }

  const { data } = useContext(ContextAll);
  console.log(data);

  return (
    <div className="wrapper" style={{ display: "flex", marginInline: "auto" }}>
      {/* <img
        src="../../../image/florkofcows stick go give flower ____ en 2022 _ Dibujitos sencillos, Pegatinas bonitas, Dibujos lindos sencillos.jfif"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      /> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          paddingTop: 100,
          gap: 25,
        }}
      >
        {data.map((data) => (
          <div
            id={data.id}
            onClick={handleClick}
            className="data.title"
            key={data.id}
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: 300,
              textAlign: "center",
              border: "1px solid blue ",
              marginBottom: 20,
              padding: 25,
              gap: 10,
              borderRadius: "4px",
            }}
          >
            title:{data.title}{" "}
            <img src={data.image} alt="" style={{ width: 50 }} />
            price : {data.price}$
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
