import React from "react";
import { Box } from "./Box";

export const Board = ({ board, onClick }) => {
    return (
        <div className="board">
            {board.map((value, index) => {
                return <Box key={index} value={value} onClick={() => value === null && onClick(index)}></Box>
            })}
        </div>
    )
}