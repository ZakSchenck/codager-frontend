import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../App";

function PendingSearch() {
  const dataList = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const filteredData = dataList.filteredPending.filter((item) =>
      item.clientname.toLowerCase().includes(inputValue.toLowerCase())
    );
    dataList.setPendingData(filteredData);
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

export default PendingSearch;
