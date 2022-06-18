import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/clients/${item.id}`}>
    <div className="card">
      <div className="card-container-1">
        <p className="app-name">{item.appname}</p>
        <p
          className={`${
            item.status === "Completed" ? "status-completed" : "status-pending"
          }`}
        >
          {item.status}
        </p>
      </div>
      <div className="card-container-2">
        <p className="client-name">{item.clientname}</p>
        <p className="date">{item.date}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
