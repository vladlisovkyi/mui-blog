import { Box, Pagination } from "@mui/material";
import React from "react";
import DiariesItem from "./DiariesItem";
import { useAuth0 } from "@auth0/auth0-react";

import usePaginationFetchPosts from "../../hooks/usePaginationFetchPosts";
import Loading from "../Loading";

const DiariesList = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const {
    currentData,
    error,
    handlePageClick,
    loading,
    pagesAmount,
    currentPage,
    setCurrentData,
  } = usePaginationFetchPosts(10);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  const handleDeleteItem = async (indexToDelete: number) => {
    if (isAuthenticated) {
      const newData = currentData.filter((_, index) => index !== indexToDelete);
      setCurrentData(newData);
    } else {
      await loginWithRedirect({
        appState: { returnTo: "/auth" },
      });
    }
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {currentData.map((post, i) => (
        <DiariesItem
          key={post.image + i}
          {...post}
          onDelete={() => handleDeleteItem(i)}
        />
      ))}
      <Pagination
        sx={{ marginTop: 4 }}
        count={pagesAmount}
        page={currentPage}
        onChange={handlePageClick}
      />
    </Box>
  );
};

export default DiariesList;
