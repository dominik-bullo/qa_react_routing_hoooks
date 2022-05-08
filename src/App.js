import "./App.css";
import React, { useState } from "react";
import Dog from "./components/Dog";
import FavoriteDogs from "./components/FavoriteDogs";
import { Route, Routes } from "react-router-dom";

function App() {
  const [favs, setFavs] = useState([]);

  const showDogs = (dogs, key) => {
    const addFavorite = (e) => {
      const dog = e.target.value;
      if (!favs.includes(dog)) {
        setFavs([...favs, dog]);
      }
    };

    const removeFavorite = (e) => {
      const dog = e.target.value;
      setFavs(favs.filter((fav) => fav !== dog));
    };

    return (
      <>
        <ul>
          {dogs.map((dog) => (
            <li key={`${dog}-${key}`}>
              <button
                className={favs.includes(dog) ? "fav" : ""}
                onClick={!favs.includes(dog) ? addFavorite : removeFavorite}
                value={dog}
              >
                {dog}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="App">
      <h1>Dog Breeds List</h1>
      <Routes>
        <Route
          exact
          path="/"
          element={<Dog favs={favs} setFavs={setFavs} showDogs={showDogs} />}
        />
        <Route
          path="/favorites"
          element={<FavoriteDogs favs={favs} showDogs={showDogs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
