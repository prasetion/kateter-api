import React from "react";
import DataItem from "./DataItem";

const DataList = ({ datalist }) => {
  return (
    <div>
      {datalist.map((item) => (
        <DataItem item={item} key={item.startTime}></DataItem>
      ))}
    </div>
  );
};

export default DataList;
