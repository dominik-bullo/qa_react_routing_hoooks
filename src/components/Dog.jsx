import React, { useState, useEffect } from "react";
import FavoriteDogs from "./FavoriteDogs";
import { Link } from "react-router-dom";

const Dog = ({ favs, setFavs, showDogs }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      // convert data to an array
      const dogArray = Object.keys(data.message);
      setDogs(dogArray);
    };

    fetchDogs();
  }, []);

  return (
    <>
      <Link to="/favorites">Show favorites</Link>
      <h2>All dogs</h2>
      {showDogs(dogs, "dogs")}
      {/* {favs.length > 0 && <FavoriteDogs favs={favs} />} */}
    </>
  );
};

export default Dog;
