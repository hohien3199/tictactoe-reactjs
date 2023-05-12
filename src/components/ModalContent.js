import React from "react";
import { ResetButton } from "./ResetButton";

export const ModalContent = ({ resetBoard, xIsNext, isDraw }) => {
    return (
        <div className="modal-content">
            <h2 id="congraText">{isDraw ? `No one wins !` : `Player ${xIsNext ? "X" : "O"} Wons`}</h2>
            <ResetButton resetBoard={resetBoard}></ResetButton>
        </div>
    )
}