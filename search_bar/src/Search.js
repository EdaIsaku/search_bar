import React, { useState } from "react";
import Result from "./Components/Result/Result";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./Search.css";

function Search() {
  const [show, setShow] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);

  const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };
  const getResult = (e) => {
    console.log(e.target.value);
    let filteredData = [];
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((response) => {
        filteredData = response
          .map((item) => {
            return item.title;
          })
          .filter((el) => {
            if (el.includes(e.target.value.trim())) {
              return el;
            }
            return false;
          });
      })
      .then(() => {
        setResult(filteredData);
      });
  };
  const debouncedGetResult = debounce(getResult, 500);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      // getResult(e);
      debouncedGetResult(e);
    }
  };
  const handleResultClick = (e) => {
    setSearchValue(e.target.innerText);
  };

  return (
    <div className="container">
      <div className={`${show ? "icon hideIt hide" : "icon showIt"} `}>
        <div className="icon__container" onClick={() => setShow(true)}>
          <FaSearch className="icon__container__search" />
        </div>
      </div>
      <div className={`search ${show ? "showIt" : "hide hideIt "} `}>
        <div className="input">
          <input
            className="input__text"
            placeholder="Search something..."
            value={searchValue}
            onChange={handleChange}
            autoFocus={true}
          />
          <div
            className="input__icon"
            onClick={() => {
              setIsClosed(true);
              setShow(false);
              setSearchValue("");
              setResult([]);
            }}
          >
            <FaTimes
              className={`input__icon__close ${isClosed ? "showIt" : ""} `}
            />
          </div>
        </div>
        <div className="result">
          <ul className="result__list">
            {result.map((item, idx) => (
              <Result
                key={idx}
                item={item}
                handleResultClick={handleResultClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
