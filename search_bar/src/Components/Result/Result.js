import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./Result.css";

function Result({ item, handleResultClick }) {
  return (
    <div className="result__list__div" onClick={handleResultClick}>
      <li className="result__list__element">{item}</li>
      <FaChevronRight className="result__list__icon" />
    </div>
  );
}

export default Result;
