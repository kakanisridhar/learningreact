import React from "react";
import { useStoreon } from "storeon/react";

export default function Counter() {
  const { dispatch, count } = useStoreon("count");
  const handleClick = (e) => {
    console.log("**clicked**");
    dispatch("inc");
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
