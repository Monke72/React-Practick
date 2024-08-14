import { Layout } from "antd";
import PropsMain from "./Props/PropsMain";
import AppJs from "./hooks Js Ts/AppJs";
import AppTs from "./hooks Js Ts/AppTs";

function App() {
  return (
    <Layout style={{ margin: 0 }}>
      {/* <PropsMain /> */}
      <AppJs />
      {/* hooks */}
      <AppTs />
      {/* hooks */}
    </Layout>
  );
}

export default App;
