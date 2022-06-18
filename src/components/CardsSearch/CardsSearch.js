import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../App";
import "./CardsSearch.css"

function CardsSearch() {
  const dataList = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const filteredData = dataList.filteredData.filter((item) =>
      item.clientname.toLowerCase().includes(inputValue.toLowerCase())
    );
    dataList.setData(filteredData);
  }, [inputValue]);
  return (
    <>
      <input
        className="searchInput"
        type="text"
        placeholder="Search by client name"
        onChange={inputHandler}
      />
    </>
  );
}

export default CardsSearch;
