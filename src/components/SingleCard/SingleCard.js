import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../../App";
import { getCards } from "../../services/CardApi";
import { useNavigate } from "react-router-dom";
import "./SingleCard.css";

function SingleCard({ fetchRequests }) {
  const dataList = useContext(DataContext);
  const setSingleCard = dataList.setSingleCard;
  const singleCard = dataList.singleCard;
  const { cardId } = useParams();
  const navigate = useNavigate();
  // Fetches single card and filters out separate params
  const card = async () => {
    const dat = await getCards();
    const newArr = await dat.find((item) => item.id === parseInt(cardId));
    setSingleCard(newArr);
  };
  // Displays card data on load
  useEffect(() => {
    card();
  }, []);

  return (
    <>
      <Link to="/codager-frontend" className="back-btn">
        Back
      </Link>
      <section className="details-section">
        <div>
          <h3>Client Information For:</h3>
          <p>{singleCard.clientname}</p>
          <p>{singleCard.date}</p>
        </div>
        <hr />
        <div>
          <h3>Email:</h3>
          <p>{singleCard.email}</p>
        </div>
        <hr />
        <div>
          <h3>App Name:</h3>
          <p>{singleCard.appname}</p>
        </div>
        <hr />
        <div>
          <h3>App Description:</h3>
          <p>{singleCard.appdescription}</p>
        </div>
      </section>
      <div className="btn-section">
        <Link to={`/codager-frontend/clients/${singleCard.id}/update`} className="update">
          Update
        </Link>
        <button
          className="delete"
          onClick={async () => {
            await fetch(`https://code-manager-app.herokuapp.com/api/v1/cards/${singleCard.id}`, {
              method: "DELETE",
            });
            navigate("/")
            fetchRequests();
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default SingleCard;
