import React from 'react'
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import TopProducts from '../TopProducts/TopProducts';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from '../Testimonials/Testimonials';


// const [orderPopup, setOrderPopup] = React.useState(false);


 const Home = () => {
  return (
    <>
      <Hero />
      <Products/>
      <TopProducts  />
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}

    </>
  )
}

export default Home;