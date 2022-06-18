import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../App.js";
import Card from "../Card/Card";
import "./AllCards.css";

function AllCards() {
  const dataList = useContext(DataContext);
  const [startSlicer, setStartSlicer] = useState(0);
  const [endSlicer, setEndSlicer] = useState(7);
  const [firstPage, setFirstPage] = useState(1);

  const prev = () => {
    if (startSlicer > 0) {
      dataList.setData(
        dataList.data.slice(
          setStartSlicer(startSlicer - 7),
          setEndSlicer(endSlicer - 7)
        )
      );
      setFirstPage(firstPage - 1);
    }
  };

  const next = () => {
    if (endSlicer < Math.ceil(dataList.data.length / 7) * 7) {
      dataList.setData(
        dataList.data.slice(
          setStartSlicer(startSlicer + 7),
          setEndSlicer(endSlicer + 7)
        )
      );
      setFirstPage(firstPage + 1);
    }
  };
  return (
    <section className="card-container">
      {dataList.data.slice(startSlicer, endSlicer).map((item, index) => {
        return <Card item={item} key={item.id} index={index} />;
      })}
      <div className="next-btns">
        <button onClick={prev} className={startSlicer === 0 && "disable"}>
          PREV
        </button>
        <h1>
          Page {firstPage} / {Math.ceil(dataList.data.length / 7)}
        </h1>
        <button
          onClick={next}
          className={
            firstPage === Math.ceil(dataList.data.length / 7) && "disable"
          }
        >
          NEXT
        </button>
      </div>
    </section>
  );
}

export default AllCards;
