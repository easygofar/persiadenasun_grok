"use client";
import React, { useEffect, useState } from "react";
import { updateStoredArray, isInStoredArray } from "@/utils";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = (props: { productId: string }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isInStoredArray("likedProducts", props.productId));
  }, [props.productId]);

  const toggleLike = () => {
    const isNowLiked = updateStoredArray("likedProducts", props.productId);
    setLiked(isNowLiked);
  };

  return (
    <button onClick={toggleLike}>
      {liked ? <FaHeart fill="red" size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
};

export default LikeButton;
