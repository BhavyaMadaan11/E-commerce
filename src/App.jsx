import React, { useEffect } from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MensCollection from "./components/Navbar/collections/Men"
import WomensCollection from "./components/Navbar/collections/Women"
import KidsSection from "./components/Navbar/collections/Kids"
// import Products from "./components/Products/Products";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Navbar/collections/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Login/SignUp";


const App = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  const [isRegistered, setIsRegistered] = useState(false);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <BrowserRouter>
    <div className="bg-primary/40 dark:bg-gray-900 dark:text-white duration-200">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<MensCollection />} />
        <Route path="/women" element={<WomensCollection/>} />
        <Route path="/kids" element={<KidsSection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>}/>
        {/* <Route
            path="/login"
            element={
              isRegistered ? (
                <Login />
              ) : (
                <Signup setIsRegistered={setIsRegistered} />
              )
            }
          /> */}
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
