import React from "react";

export const CardComponent = ({ name, title, description, image }) => {
  return (
    <div className="card cardcomponent__card animate__animated animate__backInDown">
      <img src={image} className="cardcomponent__card-img" alt="..." />
      <h5 className="cardcomponent__card-title card-title fw-bold">{name}</h5>
      <div className="card-body text-alig-left">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
