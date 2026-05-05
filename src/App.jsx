import { Outlet } from "react-router-dom";
import "./App.css";

import { Header, Footer } from "./index";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
