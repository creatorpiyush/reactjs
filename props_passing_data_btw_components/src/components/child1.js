import React from "react";
import Child2 from "./child2";

export default function child1(props) {
  console.log(props);
  return (
    <div>
      <Child2 initialValue={props.valuePasseda} />
      <Child2 initialValue={props.valuePassedb} />
      <Child2 initialValue={props.valuePassedc} />
    </div>
  );
}
