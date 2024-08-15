import React, { useContext, useEffect, useState } from "react";
import { Spin } from "antd";
import Cart from "./components/Cart";
import ContextAll from "./components/Context";

function PropsMain() {
  const { spin } = useContext(ContextAll);

  return (
    <>
      {spin ? (
        <Spin
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(50%,-50%)",
          }}
        ></Spin>
      ) : (
        <Cart />
      )}
    </>
  );
}

export default PropsMain;
