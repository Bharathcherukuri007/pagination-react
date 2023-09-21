import { useContext } from "react";
import { Context } from "./context";

export let Table = (props) => {
  const rowStyle = {
    display: "flex",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: "10px",
    position: "relative",
  };
  return (
    <div style={rowStyle}>
      <label>Show

      <select onChange={(e) => {
        props.onRowsChanged(e.target.value);
      }}
        style={{
          padding: "5px",
          border: "1px solid black",
          marginLeft: "5px",
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </select>
      Entries </label>
    </div>
  );
};
