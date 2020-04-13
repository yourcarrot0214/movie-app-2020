import React from "react";

const list = [
  { name: "pizza", brand: "Domino" },
  { name: "chicken", brand: "BHC" },
];

function Food({ name, brand }) {
  return (
    <div>
      <h2>I Like {name} </h2>
      <p>Favorite Brand is {brand} </p>
    </div>
  );
}

function App() {
  return (
    <div>
      {list.map((dish) => {
        return <Food name={dish.name} brand={dish.brand} />;
      })}
    </div>
  );
}

export default App;
