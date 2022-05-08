import React from "react";
import { Link } from "react-router-dom";

const FavoriteDogs = ({ favs, showDogs }) => {
  return (
    <>
      <Link to="/">Back to all dogs</Link>
      <h2>Your Favorites</h2>
      {showDogs(favs, "favs")}
    </>
  );
};

export default FavoriteDogs;
