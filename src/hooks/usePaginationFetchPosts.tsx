import React, { useEffect, useState } from "react";
import { Diary } from "../types/diaryInterface";

const usePaginationFetchPosts = (feedSize: number) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [pagesAmount, setPagesAmount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [posts, setPosts] = useState<Diary[]>([]);
  const [currentData, setCurrentData] = useState<Diary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const fetchAllPosts = async () => {
    try {
      const response = await fetch(
        "https://mui-blog-default-rtdb.europe-west1.firebasedatabase.app/diaries.json"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPagesAmount(Math.ceil(data.length / feedSize));
      setPosts(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (event: any, newPage: number) => {
    setCurrentPage(newPage);
    const newOffset = ((newPage - 1) * feedSize) % posts.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + feedSize;
    setCurrentData(posts.slice(itemOffset, endOffset));
  }, [itemOffset, posts, feedSize]);

  return {
    pagesAmount,
    currentData,
    handlePageClick,
    loading,
    error,
    currentPage,
    setCurrentData
  };
};

export default usePaginationFetchPosts;
