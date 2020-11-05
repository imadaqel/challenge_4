import * as React from 'react';
//var ReactDOM = require('react-dom');
import logo from './logo.svg';
import './App.css';

enum Player {
  None = 0,
  one = 1,
  two = 2
}
interface State {
  board: Board
}
type Board = Player[]

const initializeBoard = () => {
  const board = [];
  for (var i = 0; i < 42; i++) {
    board.push(Player.None)
  }
  return board;
}
const FindLowestEmptyIndex = (board: Board, column: number) => {
  for (var i = 36 + column; i > 0; i -= 7) {
    console.log(i)
  }
}
class App extends React.Component<{}, State> {
  state: State = {
    board: initializeBoard()
  }
  public renderCells = () => {
    console.log("cells")
    const { board } = this.state
    return board.map((player, index) => this.renderCell(player, index))

  }
  public handleOnClick = (index: number) => () => {

    const column = index % 7;

    this.makemove(column)
  }
  public makemove = (column: number) => {
    console.log("we moved to column)!!", column)
    //FindLowestEmptyIndex(board,column)
  }




  public renderCell = (player: Player, index: number) => {
    console.log("cell")
    return <div className="cell" key={index} onClick={this.handleOnClick(index)}>

    </div>
  }

  public render() {
    return (

      <div className="board">
        {this.renderCells()}
      </div>
    )

  }




}

export default App;
