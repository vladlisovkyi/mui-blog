import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PersonIcon from "@mui/icons-material/Person";
const Profile = () => {
  const { user, logout } = useAuth0();
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
      <Typography variant="h4">Profile</Typography>
      {user?.picture ? (
        <img
          src={user.picture}
          alt="user"
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <PersonIcon />
      )}
      <Typography variant="body1" marginTop={2}>
        {user?.name || user?.nickname}
      </Typography>
      <Typography variant="caption" marginTop={1}>
        {user?.email}
      </Typography>
      <Button variant="contained" onClick={() => logout()}>Log Out</Button>
    </Box>
  );
};

export default Profile;
