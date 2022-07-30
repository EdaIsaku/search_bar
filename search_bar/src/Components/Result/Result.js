import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./Result.css";

function Result({ item, handleResultClick }) {
  return (
    <div
      data-testid="result__list__div"
      className="result__list__div"
      onClick={handleResultClick}
    >
      <li data-testid="result__list__element" className="result__list__element">
        item:{item}
      </li>
      <FaChevronRight
        data-testid="result__list__icon"
        className="result__list__icon"
      />
    </div>
  );
}

export default Result;
