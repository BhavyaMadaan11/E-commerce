import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
function Cart() {
  const [cartItems, setCartItems] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    let dataItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems({ ...cartItems, data: dataItems, loading: false });
  }, []);

  const addRemoveItemToCart = (item, type) => {
    let cartItems = [];
    if (localStorage.getItem("cartItems")) {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    if (type == "Add")
      cartItems?.forEach((elem) => {
        if (elem?.id == item?.id) {
          elem["quantity"] = elem?.["quantity"] + 1;
        }
      });
    else if (type == "Remove") {
      cartItems?.forEach((elem) => {
        if (elem?.id == item?.id) {
          if (elem["quantity"] == 1) {
            cartItems = cartItems?.filter((f) => {
              return f?.id != elem?.id;
            });
          } else {
            elem["quantity"] = elem?.["quantity"] - 1;
          }
        }
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setCartItems({ ...cartItems, data: cartItems });
  };

  return (
    <>
      <div style={{marginBottom:'10%'}}>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            textAlign: "center",
            paddingTop: "50px",
            fontFamily: "Roboto",
          }}
        >
          Your Cart
        </Typography>
        {!cartItems?.["data"]?.length ? ( //ternary operator used , (if carItems contain no items i.e length = 0 then display empty cart)
          <Box style={{ height: "300px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              {" "}
              You have no items in the cart currently. Your cart is empty !
            </Typography>{" "}
            {/*Runs when condition is true*/}
          </Box>
        ) : (
          <>
            <Box>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  fontFamily: "Roboto",
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "50px",
                }}
              >
                Items in your cart : {cartItems?.["data"]?.length}{" "}
              </Typography>{" "}
              {/*Runs when condition is false means items present in the cart*/}
            </Box>
            <Box style={{border:"2px solid black",borderBottom:"none", marginLeft:"3%", marginRight:"3%",} }>
              <Box
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                paddingLeft={"5%"}
                padding={"5px"}
                borderBottom={"2px solid black"}
              >
                <Typography
                  width={"60%"}
                  fontSize={"23px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  paddingLeft={"30%"} 
                >
                  Items
                </Typography>
                <Typography
                  width={"10%"}
                  fontSize={"23px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                >
                  Price
                </Typography>
                <Typography
                  width={"20%"}
                  fontSize={"23px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                >
                  Quantity
                </Typography>
                <Typography
                  width={"10%"}
                  fontSize={"23px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                >
                  Total
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                {cartItems?.["data"]?.map((cartItem) => (
                  <>
                    <Box display={"flex"} flexDirection={"row"} width={"100%"} borderBottom={"2px solid black"}>
                      <Typography width={"60%"}>
                        <Box display={"flex"} flexDirection={"row"} gap={"80px"}>
                          <Box padding={"15px"} paddingLeft={"20%"} >
                            <img src={cartItem?.img} width={150}  />
                          </Box>
                          <Box marginTop={"10%"} marginBottom={"10%"}><Typography fontSize={"20px"} fontFamily={"Roboto"} fontWeight={"bold"}>{cartItem?.title}</Typography></Box>
                        </Box>
                      </Typography>
                      <Typography width={"10%"} marginTop={"6%"}  fontFamily={"Roboto"} fontSize={"20px"} fontWeight={"bold"}>{cartItem?.price}</Typography>

                      <Typography width={"20%"} marginTop={"6%"}>
                        <span>
                          {" "}
                          <Button
                            onClick={() =>
                              addRemoveItemToCart(cartItem, "Remove")
                            }
                            style={{
                              padding: "0px !important",
                              minWidth: "25px",
                            }}
                            size="small"
                            variant="contained"
                          >
                            -
                          </Button>
                        </span>
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>&nbsp;&nbsp;&nbsp;{cartItem?.quantity}&nbsp;&nbsp;&nbsp;</span>
                        <span>
                          <Button
                            onClick={() => addRemoveItemToCart(cartItem, "Add")}
                            style={{
                              padding: "0px !important",
                              minWidth: "25px",
                            }}
                            size="small"
                            variant="contained"
                          >
                            +
                          </Button>
                        </span>
                      </Typography>

                      <Typography width={"10%"} marginTop={"6%"} fontWeight={"bold"} fontSize={"20px"} fontFamily={"Roboto"}>
                        {cartItem?.price * cartItem?.quantity}
                      </Typography>
                    </Box>
                  </>
                ))}
              </Box>
              {/* <Box display={"flex"} flexDirection={"row"} borderBottom={"2px solid black"} >
                <Box width={"80%"}>
                  <Typography marginLeft={"40%"} fontFamily={"Roboto"} fontSize={"25px"} fontWeight={"bold"} padding={"10px"}>Total Amount</Typography>
                </Box>
                <Box width={"20%"}>
                  <Typography></Typography>
                </Box>
              </Box> */}
            </Box>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
