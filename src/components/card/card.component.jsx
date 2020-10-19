import React from "react";
import "./card.styles.css";

export const Card = ({ item: monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set1&siye=180x180`}
      alt={`monster ${monster.name}`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
