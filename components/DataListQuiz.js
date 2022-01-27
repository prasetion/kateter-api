import React from "react";
import DataItemQuiz from "./DataItemQuiz";

const DataListQuiz = ({ datalist }) => {
  return (
    <div>
      <div>
        {datalist.map((item) => (
          <DataItemQuiz item={item} key={item.id}></DataItemQuiz>
        ))}
      </div>
    </div>
  );
};

export default DataListQuiz;
