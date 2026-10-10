"use client";
import React, { useEffect, useState } from "react";
import { updateStoredArray, isInStoredArray } from "@/utils";
import { FaRegStar, FaStar } from "react-icons/fa";

const FavoriteButton = (props: { productId: string }) => {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setFavorited(isInStoredArray("favoritedProducts", props.productId));
  }, [props.productId]);

  const toggleFavorite = () => {
    const isNowFavorited = updateStoredArray(
      "favoritedProducts",
      props.productId
    );
    setFavorited(isNowFavorited);
  };

  return (
    <button onClick={toggleFavorite}>
      {favorited ? <FaStar fill="gold" size={20} /> : <FaRegStar size={20} />}
    </button>
  );
};

export default FavoriteButton;
