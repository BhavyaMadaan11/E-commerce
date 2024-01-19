import React from "react";
import { Box, Rating, Typography,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./style.css";
const Women = () => {
  const ProductsData = [
    {
      id: "W1",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/o/f/9/xl-kh0bl7348-indo-era-original-imagwzr68vhjfzz8.jpeg?q=70&crop=false",
      title: "Women Pure Cotton Kurta Pant Dupatta Set",
      rating: 3.6,
      price: 799,
      color: "Blue",
      quantity:1
    },
    
    {
      id: "W2",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/1/t/g/xl-503-fashion-trends-original-imafz89dzxzefs9v.jpeg?q=70&crop=false",
      title: "Women Viscose Rayon Kurta Palazzo Set",
      price: 516,
      rating: 4.0,
      color: "T-Blue",
      quantity:1
    },
    {
      id: "W3",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/z/v/e/xs-shpan50077-sassafras-original-imag5tsyy4udgyz4-bb.jpeg?q=70&crop=false",
      title: "Women Flared Maroon Viscose Rayon Trousers",
      rating: 4.2,
      price: 509,
      color: "Maroon",
      quantity:1
    },
    {
      id: "W4",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/s/t/s-os-winner-786-rd-juneberry-original-imagkwchzgsrfwgz.jpeg?q=70&crop=false",
      title: "Oversize Women Printed Round Neck Pure Cotton T-Shirt",
      rating: 4.2,
      price: 429,
      color: "Red",
      quantity:1
    },
    {
      id: "W5",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/tight/y/n/0/28-gym-wear-jyoti-collection-original-imagrqh5beyfufdq.jpeg?q=70&crop=false",
      title: "Color Block Women Black Tights",
      rating: 4.5,
      color: "Black",
      price: 400,
      quantity:1
    },
    {
      id: "W6",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/skirt/m/f/s/26-kttwomensskirt68-kotty-original-imagccg2xagdzz32-bb.jpeg?q=70&crop=false",
      title: "Denim Mini Skirt For Girls",
      rating: 4.0,
      color: "Grey",
      price: 399,
      quantity:1
    },
    {
      id: "W7",
      img: "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/dress/1/x/x/l-siri-turtle-purvaja-original-imag44zqy3zakcny.jpeg?q=70&crop=false",
      title: "Women Bodycon Beige Dress",
      rating: 4.2,
      color: "Cream",
      price: 366,
      quantity:1
    },
    {
      id: "W8",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/o/1/u/28-kttladiesjeans854-kotty-original-imags7tess6zjqjx.jpeg?q=70&crop=false",
      title: "Women Flared High Jeans",
      rating: 3.9,
      color: "Blue",
      price: 459,
      quantity:1
    },
    {
      id: "W9",
      img: "https://rukminim2.flixcart.com/image/832/832/l4pxk7k0/dupatta/q/d/8/2-25-meters-pineapple-white-miss-lady-fashion-original-imagfk8azf54xne7.jpeg?q=70&crop=false",
      title: "Net Embroidered White Women Dupatta",
      rating: 4.0,
      color: "White",
      price: 199,
      quantity:1
    },
    {
      id: "W10",
      img: "https://rukminim2.flixcart.com/image/832/832/kxp0mfk0/poncho/9/n/j/free-black-dot-poncho-discoveryline-original-imaga3hyh6x7xw39.jpeg?q=70&crop=false",
      title: "Wool Blend Poncho",
      rating: 4.5,
      color: "Black-Grey",
      price: 755,
      quantity:1
    },
    {
      id: "W11",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/2/y/y/free-b21-black-leheriya-saree-best-seller-sexy-bollywood-stylish-original-imag5h9yxf2uu42t-bb.jpeg?q=70&crop=false",
      title: "Solid/Plain Bollywood Georgette Saree",
      rating: 4.1,
      color: "Grey",
      price: 472,
      quantity:1
    },
    {
      id: "W12",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-skirt/j/u/y/30-3132b-pencil-buynewtrend-women-original-imagn4dwezugwdyu.jpeg?q=70&crop=false",
      title: "Women Solid Pencil Black Skirt",
      rating: 4.0,
      color: "PBlack",
      price: 360,
      quantity:1
    },
    {
      id: "W13",
      img: "https://rukminim2.flixcart.com/image/832/832/kh6lg280/sweater/a/y/z/l-pv-906-grey-pivl-original-imafx92gpvyqxjuq.jpeg?q=70&crop=false",
      title: "Women Self Design Collared Neck Sweater",
      rating: 4.0,
      color: "Grey",
      price: 399,
      quantity:1
    },
    {
      id: "W14",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/m/u/9/s-chikan-kurta-htk-original-imagwgz8hjjynwg7.jpeg?q=70&crop=false",
      title: "Women Cotton Blend Kurta Dupatta Set",
      rating: 4.2,
      color: "White",
      price: 689,
      quantity:1
    },
    {
      id: "W15",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/salwar-kurta-dupatta/a/x/6/xxl-ruhi-yallow-sarvatit-original-imagk8nyy8ewvhyz.jpeg?q=70&crop=false",
      title: "Embroidered Kurta, Trouser/Pant & Dupatta Set",
      rating: 3.9,
      color: "Yellow",
      price: 737,
      quantity:1
    },
    {
      id: "W16",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/a/o/s-gw1026-top-gudwears-original-imagmdfewneshghz.jpeg?q=70&crop=false",
      title: "Casual Roll Up Sleeves Printed Women Black Top",
      rating: 4.0,
      color: "Black",
      price: 299,
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

export default Women;
