import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FormLogin from "./components/FormLogin";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Orders from "./components/Orders/Orders";
import Registration from "./components/Logins/Registration";
import Login from "./components/Logins/Login";
import NotFound from "./components/NotFound/NotFount";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/form-login" element={<FormLogin />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
