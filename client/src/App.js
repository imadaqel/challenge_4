import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

enum Player {
  None = null,
  one = 1,
  two = 2
}
interface State {
  board: Board
}
type Board = Player[]

const initializeBoard = () => {
  const board = []
  for (var i = 0; i < 42; i++) {
    board.push(Player.None)
  }
}

class App extends React.Component<{}, State> {
  state: State = {
    board: initializeBoard()
  }
  public renderCells = () => {
    const { board } = this.state
    board.map(c=>console.log(c))
    return board.map(cell => this.renderCell())
  }
  public renderCell = () => {

  }




}

export default App;
