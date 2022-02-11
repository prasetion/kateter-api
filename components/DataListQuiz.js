import React from "react";
import DataItemQuiz from "./DataItemQuiz";

const DataListQuiz = ({ datalist }) => {
  return (
    <div>
      {datalist.map((item) => (
        <DataItemQuiz item={item} key={item.startTime}></DataItemQuiz>
      ))}
    </div>
  );
};

export default DataListQuiz;
