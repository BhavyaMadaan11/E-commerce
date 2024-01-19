import React from "react";
import { Box, Rating, Typography,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./style.css";
const Kids = () => {
  const ProductsData = [
    {
      id: "k1",
      img: "https://m.media-amazon.com/images/I/51nUfiMuCLL._SX679_.jpg",
      title: "Baby's Cotton T-Shirt Pant Set",
      rating: 4.0,
      price: 699,
      color: "Sky-blue Gray",
      quantity:1
    },
    
    {
      id: "k2",
      img: "https://m.media-amazon.com/images/I/51p+NkSUtkL._SX679_.jpg",
      title: "Baby Boys Formal Set",
      price: 629,
      rating: 4.0,
      color: "Green Navy-Blue, white",
      quantity:1
    },
    {
      id: "k3",
      img: "https://m.media-amazon.com/images/I/51lqXevdYjS._SX679_.jpg",
      title: "Boys Cotton Stripe Print Dress Set",
      rating: 4.0,
      price: 983,
      color: "Yellow",
      quantity:1
    },
    {
      id: "k4",
      img: "https://m.media-amazon.com/images/I/51HGHNfjwAL._SX679_.jpg",
      title: "Winter Warm Sweatshirt Hood Jacket and Jogger Pant",
      rating: 5.0,
      price: 1499,
      color: "Dark Grey",
      quantity:1
    },
    {
      id: "k5",
      img: "https://m.media-amazon.com/images/I/91imugMpmnL._SX679_.jpg",
      title: "Girls Radha Dress Lehnga Choli",
      rating: 5.0,
      color: "Orange",
      price: 949,
      quantity:1
    },
    {
      id: "k6",
      img: "https://m.media-amazon.com/images/I/61s6sZY-6qL._SX679_.jpg",
      title: "Girls Ethnic Cotton Set",
      rating: 4.0,
      color: "Orange-Blue",
      price: 951,
      quantity:1
    },
    {
      id: "k7",
      img: "https://m.media-amazon.com/images/I/61Gm4M0iKWL._SY879_.jpg",
      title: "Naughty Ninos Girls Dress",
      rating: 4.0,
      color: "Black",
      price: 559,
      quantity:1
    },
    {
      id: "k8",
      img: "https://m.media-amazon.com/images/I/81fbAMgSGiL._SY879_.jpg",
      title: "Indo Western Sherwani Set For Boys",
      rating: 5.0,
      color: "Grey-Blue",
      price: 999,
      quantity:1
    },
    {
      id: "k9",
      img: "https://m.media-amazon.com/images/I/61nMQMByToL._SX679_.jpg",
      title: "Boys Beige Full-Sleeve Solid Applique Jacket",
      rating: 3.5,
      color: "Beige",
      price: 1726,
      quantity:1
    },
    {
      id: "k10",
      img: "https://m.media-amazon.com/images/I/61Mfh5kdZPL._SY879_.jpg",
      title: "Girls Cotton Tulip Knee-Length Dress",
      rating: 4.0,
      color: "Pink-Blue",
      price: 679,
      quantity:1
    },
    {
      id: "k11",
      img: "https://m.media-amazon.com/images/I/419-wAiNwzL._SX342_SY445_.jpg",
      title: "Girls Hat,Scarf & Glove Set-Kids Cold Weather Winter Accessories",
      rating: 4.5,
      color: "Black",
      price: 4498,
      quantity:1
    },
    {
      id: "k12",
      img: "https://m.media-amazon.com/images/I/71q4VmYLZgL._SX679_.jpg",
      title: " Baby Winter Panda Cartoon Monkey Cap",
      rating: 3.0,
      color: "Blue",
      price: 389,
      quantity:1
    },
    {
      id: "k13",
      img: "https://m.media-amazon.com/images/I/41V7mlby+vL._SX679_.jpg",
      title: "Nike Girls Casual Pants",
      rating: 4.0,
      color: "Worn Blue",
      price: 1329,
      quantity:1
    },
    {
      id: "k14",
      img: "https://m.media-amazon.com/images/I/512H2YhjgDL._SX679_.jpg",
      title: "Boys Jogger Set",
      rating: 3.0,
      color: "Red-Black",
      price: 714,
      quantity:1
    },
    {
      id: "k15",
      img: "https://m.media-amazon.com/images/I/41ozR0U+MRL.jpg",
      title: "SHOPMORE Winter TrackSuit",
      rating: 4.5,
      color: "Black",
      price: 1889,
      quantity:1
    },
    {
      id: "k16",
      img: "https://m.media-amazon.com/images/I/81HNWe2vQTL._SY879_.jpg",
      title: "Fashion Dream Girls Mini Dress",
      rating: 4.0,
      color: "Navy Blue",
      price: 557,
      quantity:1
    }
    
  ];
  let cartItems =[]
  const addToCart = (element)=>{

    if(localStorage.getItem("cartItems"))
    {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    let isExist=false;
    cartItems?.forEach((elem)=>{
      if(elem?.id == element?.id){
      elem["quantity"]=elem["quantity"]+1;
      isExist=true;
      }
    })
    if(!isExist)
      cartItems.push(element)
    
      if(cartItems?.length)
      localStorage.setItem("cartItems",JSON.stringify(cartItems))
  }
 
  return (
    <div>
      <Box
        style={{ paddingTop: "2%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          style={{
            color: "rgb(254, 169, 40)",
            fontWeight: "bold",
            fontSize: "16px",
            fontFamily: "Roboto",
            padding: "2px",
          }}
        >
          Top Selling Products for you
        </Typography>
        <Typography
          style={{ fontSize: "13px", fontFamily: "Roboto", padding: "2px" }}
        >
          Products
        </Typography>
        <Typography
          style={{ fontSize: "10px", fontFamily: "Roboto", padding: "2px" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </Typography>
      </Box>
      <Box
     
        style={{ padding: "2%", width: "100%" }}
        justifyContent={"space-between"}
        display={"flex"}
        flexWrap={'wrap'}
        flexDirection={"row"}
      >
        {ProductsData?.map((element, index) => (
          <Box
            id="img1"
            padding={"5px"}
            margin={"15px"}
            marginTop={"50px"}
            width={"20%"}
            
            key={index}
            display={"flex"}
            flexDirection={"column"}
          >
            <img style={{ borderRadius: "2%",width:'300px',height:'300px' }} src={element?.img} />
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight:"600",
                padding: "2px",
                textAlign: "center",
              }}
            >
              {element?.title}
            </Typography>
            <Box padding={"3px"} display={"flex"} flexDirection={"column"}>
              <Typography
                style={{
                  fontSize: "13px",
                  fontFamily: "Roboto",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Rs. {element?.price}
              </Typography>
              <Typography
                style={{
                  fontSize: "13px",
                  fontFamily: "Roboto",
                  textAlign: "left",
                }}
              >
                {element?.color}
              </Typography>
              <Rating
                style={{ fontSize: "15px", paddingTop: "1%" }}
                value={element?.rating}
                readOnly
              />

              <Button 
              style={{width:'97%',marginTop:'20px',margin:'3px'}}
              onClick={()=>addToCart(element)}
              size="small"
                component="label"
                variant="contained"
                startIcon={<ShoppingCartIcon/>}
              >
               Add to cart
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Kids;

