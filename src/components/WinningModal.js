import React from "react";
import { ModalContent } from "./ModalContent";

export const WinningModel = ({ resetBoard, gameOver, xIsNext, isDraw }) => {
    return (
        <div id="winningModal" className={`modal ${gameOver ? "active" : ""}`}>
            <ModalContent resetBoard={resetBoard} xIsNext={xIsNext} isDraw={isDraw}></ModalContent>
        </div>
    )
}