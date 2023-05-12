import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { GameTitile } from './components/GameTitle';
import { ScoreBoard } from './components/ScoreBoard';
import { WinningModel } from './components/WinningModal';

function App() {

  const Winning_Combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [isDraw, setIsDraw] = useState(false)

  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if (index === boxIndex)
        return xIsNext === true ? "X" : "O"
      else
        return value
    })
    const isDraw = checkDraw(updateBoard)
    const hasWinner = checkWinner(updateBoard)

    if (hasWinner) {
      if (hasWinner === "O") {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }

    if (isDraw) {
      setGameOver(true)
      setIsDraw(true)
    }

    setBoard(updateBoard)
    setXIsNext(!xIsNext)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < Winning_Combinations.length; i++) {
      const [x, y, z] = Winning_Combinations[i]

      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  const checkDraw = (board) => {
    return board.every(value => value !== null)
  }

  const resetBoard = () => {
    setGameOver(false)
    setIsDraw(false)
    setXIsNext(!xIsNext)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <GameTitile></GameTitile>
      <ScoreBoard scores={scores} xIsNext={gameOver ? !xIsNext : xIsNext}></ScoreBoard>
      <Board board={board} onClick={handleBoxClick}></Board>
      <WinningModel resetBoard={resetBoard} gameOver={gameOver} xIsNext={gameOver ? !xIsNext : xIsNext} isDraw={isDraw}></WinningModel>
    </div>
  );
}

export default App;
