import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.image} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phoneNumber}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
