import React from "react";

const Box = ({ title, item, result }) => {
  return (
    <div className={result === "win" ? "box_win" : result === "lose" ? "box_lose" : "box"}>
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item?.img}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
