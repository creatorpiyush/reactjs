import React from "react";

export default function child2(props) {
  console.log(props);
  return <button>{props.initialValue}</button>;
}
