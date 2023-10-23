import React, { useState, useRef, useEffect,useCallback } from "react";
import Infinte from "./Challenege/Infinte";
import axios from "axios";
function App() {
  console.log("render");
  const [query, setQuery] = useState("");
  const ControllerRef = useRef(null);
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const renderItem = ({ title }, key, ref) => {
    // console.log("renderItem");
    return (
      <div ref={ref} key={key}>
        {title}
      </div>
    );
  };
  const debounce = async(query, pageNo) => {
      try {
        if (ControllerRef.current) ControllerRef.current.abort();
        ControllerRef.current = new AbortController();
        const res = await axios.get(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNo,
            }),
          { signal: ControllerRef.current.signal }
        );
        const data = await res.data;
        setData((prev) => [...prev, ...data.docs]);
      } catch (error) {}
    };
  // const getData = async (query, pageNo) => {};
  return (
    <>
      <input value={query} onChange={(e) => handleChange(e)}></input>
      <Infinte
        getData={debounce}
        query={query}
        renderListItem={renderItem}
        listData={data}
      ></Infinte>
    </>
  );
}

export default App;
