import React from "react";
import Board from "./Board";

// export default function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   );
// }

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  handleClick = (i) => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares;

    squares[i] = this.state.xIsNext ? "X" : "0";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            clickAction={(i) => this.handleClick(i)}
            squares={current.squares}
          />
        </div>
      </div>
    );
  }
}
