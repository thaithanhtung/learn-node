import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signin from "../components/Signin";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
