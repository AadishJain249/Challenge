import React, { useState, useEffect } from "react";

function Suggestion() {
  const arr = [
    "school bag",
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part",
  ];
  console.log("render");
  const sugg = [];
  const [list, setList] = useState([]);
  const [value, setValue] = useState(""); //value entered in input field

  const setInputValue = (e, x) => {
    setValue(x);
  };

  const autoComplete = (inputValue) => {
    setValue(inputValue);
    arr.forEach((x) => {
      if (
        x.substring(0, inputValue.length).toUpperCase() ===
        inputValue.toUpperCase()
      ) {
        sugg.push(x);
        // run a map on sugg array to filter the rest of data
        setList(
          sugg.map((x, idx) => {
            return (
              <p
                key={idx}
                onClick={(event) => {
                  setInputValue(event, x);
                }}
              >
                {x}
              </p>
            );
          })
        );
      }
      if (inputValue.length === 0) {
        setList("");
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => autoComplete(value), 1000);
    return () => clearTimeout(timer);
  }, [value]);

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        style={{
          margin: "auto",
          width: "50%",
          border: "3px solid green",
          padding: "10px",
        }}
        onChange={(e) => inputChangeHandler(e)}
      ></input>
      {list}
    </>
  );
}

export default Suggestion;
