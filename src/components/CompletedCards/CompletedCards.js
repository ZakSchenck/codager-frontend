import React from "react";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App.js";
import Card from "../Card/Card";

function CompletedCards() {
  const dataList = useContext(DataContext);
  const [startSlicer, setStartSlicer] = useState(0);
  const [endSlicer, setEndSlicer] = useState(7);
  const [firstPage, setFirstPage] = useState(1);
  const prev = () => {
    if (startSlicer > 0) {
      dataList.setCompletedData(
        dataList.completedData.slice(
          setStartSlicer(startSlicer - 7),
          setEndSlicer(endSlicer - 7)
        )
      );
      setFirstPage(firstPage - 1);
    }
  };

  const next = () => {
    if (endSlicer < Math.ceil(dataList.completedData.length / 7) * 7) {
      dataList.setCompletedData(
        dataList.completedData.slice(
          setStartSlicer(startSlicer + 7),
          setEndSlicer(endSlicer + 7)
        )
      );
      setFirstPage(firstPage + 1);
    }
  };
  return (
    <section className="card-container">
      {dataList.completedData.slice(startSlicer, endSlicer).map((item) => {
        return <Card item={item} key={item.id} />;
      })}
      <div className="next-btns">
        <button onClick={prev} className={startSlicer === 0 && "disable"}>
          PREV
        </button>
        <h1>
          Page {firstPage} / {Math.ceil(dataList.completedData.length / 7)}
        </h1>
        <button
          onClick={next}
          className={
            firstPage === Math.ceil(dataList.completedData.length / 7) && "disable"
          }
        >
          NEXT
        </button>
      </div>
    </section>
  );
}

export default CompletedCards;
