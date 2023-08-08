import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuth0 } from "@auth0/auth0-react";
const Form = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" marginBottom={4}>
        Sign In
      </Typography>
      <Button
        variant="outlined"
        sx={{ minWidth: "240px" }}
        color="inherit"
        onClick={() => loginWithRedirect()}
      >
        <GoogleIcon sx={{ mr: 2 }} />
        Sign In With Google
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#000",
          color: "#fff",
          minWidth: "240px",
          ":hover": { bgcolor: "#363535" },
        }}
        onClick={() => loginWithRedirect()}
      >
        <GitHubIcon sx={{ mr: 2 }} />
        Sign In With Github
      </Button>
    </Box>
  );
};

export default Form;
