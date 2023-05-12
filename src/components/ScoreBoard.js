import React from "react";

export const ScoreBoard = ({ scores, xIsNext }) => {
    const { xScore, oScore } = scores
    return (
        <div className="scoreBoard">
            <span className={`score x-score ${!xIsNext && "inactive"}`}> X - {xScore}</span>
            <span className={`score o-score ${xIsNext && "inactive"}`}> O - {oScore}</span>
        </div>
    )
}