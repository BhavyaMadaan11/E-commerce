import React from "react";
import { Box, Rating, Typography,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./style.css";
const Men = () => {
  const ProductsData = [
    {
      id: "M1",
      img: "https://m.media-amazon.com/images/I/61HeT5N82tL._SX679_.jpg",
      title: "Puma Men's Polyester Standard Length Jacket",
      rating: 4.0,
      price: 2349,
      color: "Black",
      quantity:1
    },
    
    {
      id: "M2",
      img: "https://m.media-amazon.com/images/I/41zpKEj9qUL._SY879_.jpg",
      title: "Random Stripe Men Solid Single Blazer",
      price: 1699,
      rating: 3.5,
      color: "Black",
      quantity:1
    },
    {
      id: "M3",
      img: "https://m.media-amazon.com/images/I/71xUI832RXL._SY879_.jpg",
      title: "Men's Silk Blend Kurta Churidar Pyjama with Ethnic Jacket Set",
      rating: 4.0,
      price: 1999,
      color: "Dark Green",
      quantity:1
    },
    {
      id: "M4",
      img: "https://m.media-amazon.com/images/I/711NWtGpY7L._SY879_.jpg",
      title: "Men Casual Cargo Jogger",
      rating: 3.8,
      price: 1149,
      color: "Ash",
      quantity:1
    },
    {
      id: "M5",
      img: "https://m.media-amazon.com/images/I/81wFLUDzAbL._SY879_.jpg",
      title: "T-Shirt for Mens Double Stripes on Chest",
      rating: 3.2,
      color: "Teal",
      price: 215,
      quantity:1
    },
    {
      id: "M6",
      img: "https://m.media-amazon.com/images/I/61kLgtW5ScL._SY879_.jpg",
      title: "NORTHWIND Men's High Turtle Neck Cotton T-Shirt",
      rating: 4.0,
      color: "Black",
      price: 485,
      quantity:1
    },
    {
      id: "M7",
      img: "https://m.media-amazon.com/images/I/51mlPPVNGWL._SX679_.jpg",
      title: "AUSK Men's Warm Full Sleeves Hoodie",
      rating: 2.5,
      color: "Teal",
      price: 624,
      quantity:1
    },
    {
      id: "M8",
      img: "https://m.media-amazon.com/images/I/71QEwfmuOlL._SX679_.jpg",
      title: "Arrow Formal Trouser Pants for Men",
      rating: 3.2,
      color: "Dark Grey",
      price: 1009,
      quantity:1
    },
    {
      id: "M9",
      img: "https://m.media-amazon.com/images/I/51toUDtsLlL._SY879_.jpg",
      title: "Peter England Men Two Piece Suit",
      rating: 4.2,
      color: "Dark Green",
      price: 6299,
      quantity:1
    },
    {
      id: "M10",
      img: "https://m.media-amazon.com/images/I/71OLkBVHc+L._SY879_.jpg",
      title: "Arrow Men's Slim Shirt",
      rating: 4.0,
      color: "Navy Blue",
      price: 1199,
      quantity:1
    },
    {
      id: "M11",
      img: "https://m.media-amazon.com/images/I/71nyYgzxYYL._SY879_.jpg",
      title: "Hummel KENNY JACKET",
      rating: 4.5,
      color: "White-Blue",
      price: 1254,
      quantity:1
    },
    {
      id: "M12",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/c/6/m-chinese-collar-solid-t-shirt-for-men-solstice-original-imagwnbhbnqqdphz.jpeg?q=70&crop=false",
      title: "Mandarin Collar Cotton T-Shirt",
      rating: 3.4,
      color: "Yellow",
      price: 549,
      quantity:1
    },
    {
      id: "M13",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/c/7/r/-original-imagvrp3bfx4fq6y.jpeg?q=70&crop=false",
      title: "LEVI'S Men Slim Mid Rise Blue Jeans",
      rating: 4.5,
      color: "Blue",
      price: 1399,
      quantity:1
    },
    {
      id: "M14",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/z/z/f/xl-bogrcargo-p21-blive-original-imagujzzggxqqqb8.jpeg?q=70&crop=false",
      title: "BLIVE Cotton Printed Men Cargos",
      rating: 3.9,
      color: "Dark Green",
      price: 469,
      quantity:1
    },
    {
      id: "M15",
      img: "https://m.media-amazon.com/images/I/51HOBqS-AxL._SY879_.jpg",
      title: "Hummel Ailis Sportswear Flexible Pants",
      rating: 4.0,
      color: "Black",
      price: 765,
      quantity:1
    },
    {
      id: "M16",
      img: "https://m.media-amazon.com/images/I/71Bo5j9n2vL._SY879_.jpg",
      title: "GYMIFIC Sports Training Solid Shorts for Men",
      rating: 3.5,
      color: "T- Blue",
      price: 374,
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
            margin={"5px"}
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
              style={{width:'85%',marginTop:'20px',margin:'3px'}}
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

export default Men;
