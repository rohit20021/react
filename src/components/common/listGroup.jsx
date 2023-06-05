import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, onItemSelected,selectedGenre } = props;
  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          key={item._id}
          onClick={() => onItemSelected(item)}
          type="button"
          className={item.name == selectedGenre ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
