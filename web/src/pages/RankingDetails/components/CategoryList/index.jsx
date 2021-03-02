import React from "react";

import "./styles.css";

export default function CategoryList({ categoryName, items }) {
  return (
    <div className="categoryContainer">
      <h3>{categoryName}</h3>
      <ul>
        {items.length > 0
          ? items.map((item, index) => (
              <li key={index}>
                {index + 1}º {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
