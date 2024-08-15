import { Layout } from "antd";
import PropsMain from "./Props/PropsMain";
import AppJs from "./hooks Js Ts/AppJs";
import AppTs from "./hooks Js Ts/AppTs";
import { createContext, useState } from "react";
import { ContextProvider } from "./Props/components/Context";
const MyContext = createContext();

function App() {
  const [spin, setSpin] = useState(false);

  return (
    <ContextProvider>
      {/* // <MyContext.Provider value={""}> */}
      <Layout style={{ margin: 0 }}>
        <PropsMain spin={spin} setSpin={setSpin} />
        {/* <AppJs /> */}
        {/* hooks */}
        {/* <AppTs /> */}
        {/* hooks */}
      </Layout>
    </ContextProvider>
  );
}

export default App;
export { MyContext };
