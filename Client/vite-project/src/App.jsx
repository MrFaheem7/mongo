import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Data from "./Components/Data";
import PrivateRoutes from "./Components/PrivateRoutes";
import PublicRoutes from "./Components/PublicRoutes";
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
      />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
