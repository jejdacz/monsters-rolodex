import React from "react";
//import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = ({ innerElement: Component, items, keyProp = "id" }) => (
  <div className="card-list">
    {items.map(item => (
      <Component key={item[keyProp]} item={item} />
    ))}
  </div>
);
