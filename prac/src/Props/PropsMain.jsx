import React, { useState } from "react";
import Menu from "./components/Menu";
import { Layout, Spin } from "antd";





function PropsMain() {
  const [spin, setSpin] = useState(false);




  const siteName = "LOcal coding";
  const some = {
    name: "aleks",
    age: 32,
    isMarried: false,
  };
  return (
    <Layout style={{ margin: 0, color: "red" }}>
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
