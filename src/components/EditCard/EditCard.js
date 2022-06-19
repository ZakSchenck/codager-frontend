import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { updateClient } from "../../services/CardApi";
import { useNavigate } from "react-router-dom";
import { validateSchema } from "../../Validator";
import { useParams } from "react-router-dom";
import { getCards } from "../../services/CardApi";

function EditCard({ fetchRequests }) {
  const dataList = useContext(DataContext);
  //   const [app, setApp] = useState("");
  //   const [client, setClient] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [select, setSelect] = useState("Pending");
  const [errorState, setErrorState] = useState(false);
  const [formObject, setFormObject] = useState({
    id: "",
    status: "Pending",
    appname: "",
    clientname: "",
    appdescription: "",
    email: "",
  });
  const { cardId } = useParams();
  // Fetches single card and filters out separate params
  const card = async () => {
    const dat = await getCards();
    const newObject = await dat.find((item) => item.id === parseInt(cardId));
    setFormObject(newObject);
  };
  // Displays card data on load
  useEffect(() => {
    card();
  }, []);
  const navigate = useNavigate();
  const appInput = (e) => {
    setFormObject({
      ...formObject,
      appname: e.target.value,
    });
  };
  const clientInput = (e) => {
    setFormObject({
      ...formObject,
      clientname: e.target.value,
    });
  };
  const emailInput = (e) => {
    setFormObject({
      ...formObject,
      email: e.target.value,
    });
  };
  const descriptionInput = (e) => {
    setFormObject({
      ...formObject,
      appdescription: e.target.value,
    });
  };
  const selectInput = (e) => {
    setFormObject({
      ...formObject,
      status: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = await validateSchema.isValid(formObject);
    if (!isValid) {
      setErrorState(true);
    } else {
      await updateClient(formObject);
      await fetchRequests();
      navigate("/");
    }
  };
  return (
    <>
      <section className="post-section">
        <form onSubmit={submitHandler}>
          <h1 className="new-client">Update Client</h1>
          <label htmlFor="app">App Name:</label>
          <input
            type="text"
            name="app"
            value={formObject.appname}
            onChange={appInput}
          />

          <label htmlFor="client">Client Name:</label>
          <input type="text" name="client" value={formObject.clientname} onChange={clientInput} />

          <label htmlFor="email">Client Email: </label>
          <input type="text" name="email" value={formObject.email} onChange={emailInput} />

          <label htmlFor="status">Status:</label>
          <select name="status" onChange={selectInput} value={formObject.status}>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={descriptionInput}
            value={formObject.appdescription}
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

export default EditCard;
