import React from "react";
import PropTypes from "prop-types";

const list = [
  { id: 1, name: "pizza", brand: "Domino", rating: 5 },
  { id: 2, name: "chicken", brand: "BHC", rating: 4.9 },
];

function Food({ name, brand, rating }) {
  return (
    <div>
      <h2>I Like {name} </h2>
      <h4>{rating}/5.0</h4>
      <p>Favorite Brand is {brand} </p>
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {list.map((dish) => {
        return (
          <Food
            key={dish.id}
            name={dish.name}
            brand={dish.brand}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
