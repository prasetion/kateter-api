import React from "react";
import DataItem from "./DataItem";

const DataList = ({ datalist }) => {
  return (
    <div>
      <div>
        {datalist.data.map((item) => (
          <DataItem item={item} key={item.id}></DataItem>
        ))}
      </div>
    </div>
  );
};

export default DataList;
