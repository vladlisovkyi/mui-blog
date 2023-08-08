import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Box position={"relative"} width={"100%"} height={"90vh"} paddingBottom={8}>
    <img
      src="./assets/images/road.jpg"
      alt="Road"
      width={"100%"}
      height={"70%"}
    />
    <Typography
      variant={"h3"}
      textAlign={"center"}
      width={"100%"}
      sx={{ position: "absolute", top: "25%", color: "#f0f0f0" }}
      fontFamily={"Poppins, sans-serif"}
    >
      Dare to live a life you've always wanted
    </Typography>
    <Box display={"flex"} flexDirection={"column"} height={"30%"}>
      <Typography
        variant={"h3"}
        textAlign={"center"}
        fontFamily={"Poppins, sans-serif"}
        padding={4}
      >
        Share your travel diaries with us
      </Typography>
      <Box margin={"auto"}>
        <Button variant="outlined" sx={{ mr: 2 }}>
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Share your story</Link>
        </Button>
        <Button LinkComponent={Link} variant="contained" sx={{ ml: 2 }}>
          <Link to="/diaries" style={{textDecoration: 'none', color: 'inherit'}}> View Diaries</Link>
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

export default Hero