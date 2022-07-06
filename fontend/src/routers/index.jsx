import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signin from "../components/Signin";
// import login1 from "../components/component/login1";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/login1" element={<login1 />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
