import React, { useState } from "react";
import Menu from "./components/Menu";
import { Layout, Spin } from "antd";

function PropsMain() {
  const [spin, setSpin] = useState(true);

  setTimeout(() => {
    setSpin((prev) => !prev);
  }, 2000);

  const siteName = "LOcal coding";
  const some = {
    name: "aleks",
    age: 32,
    isMarried: false,
  };
  return (
    <Layout style={{ margin: 0, height: "100vh", color: "red" }}>
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
        <Menu siteName={siteName} some={some}></Menu>
      )}
    </Layout>
  );
}

export default PropsMain;
