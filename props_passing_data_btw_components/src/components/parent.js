import React from "react";
import Child1 from "./child1";

export default class parent extends React.Component {
  aFunction = () => {
    return 5;
  };

  bFunction = () => {
    return `Hi`;
  };

  cFunction = () => {
    return `Bye`;
  };

  render() {
    const passinga = this.aFunction();
    const passingb = this.bFunction();
    const passingc = this.cFunction();

    return (
      <Child1
        valuePasseda={passinga}
        valuePassedb={passingb}
        valuePassedc={passingc}
      />
    );
  }
}
