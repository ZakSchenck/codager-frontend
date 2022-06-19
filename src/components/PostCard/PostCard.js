import React, { useContext, useState } from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { createCard } from "../../services/CardApi";
import { useNavigate } from "react-router-dom";
import { validateSchema } from "../../Validator";

function PostCard({ fetchRequests }) {
  const [app, setApp] = useState("");
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState("Pending");
  const [errorState, setErrorState] = useState(false);
  const navigate = useNavigate();
  const date = new Date();
  const getDate =
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear();
  const appInput = (e) => {
    setApp(e.target.value);
  };
  const clientInput = (e) => {
    setClient(e.target.value);
  };
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const descriptionInput = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const newRec = {
      date: getDate,
      status: select,
      appname: app,
      clientname: client,
      appdescription: description,
      email: email,
    };
    const isValid = await validateSchema.isValid(newRec);
    if (!isValid) {
      setErrorState(true);
    } else {
      createCard(newRec);
      navigate("/");
      fetchRequests();
    }
  };
  const selectInput = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <section className="post-section">
        <form onSubmit={submitHandler}>
          <h1 className="new-client">New Client</h1>
          <label htmlFor="app">App Name:</label>
          <input type="text" name="app" onChange={appInput} />

          <label htmlFor="client">Client Name:</label>
          <input type="text" name="client" onChange={clientInput} />

          <label htmlFor="email">Client Email: </label>
          <input type="text" name="email" onChange={emailInput} />

          <label htmlFor="status">Status:</label>
          <select name="status" onChange={selectInput}>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={descriptionInput}
          />
          {errorState && (
            <p className="error">Make sure all inputs are valid</p>
          )}
          <div className="form-btns">
            <button type="submit">Submit</button>
            <Link to="/codager-frontend">Cancel</Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default PostCard;
