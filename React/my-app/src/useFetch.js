import { useEffect, useState } from "react";
export const useFetch = (options) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("UseFetch UseEffect");
    fetch(options.url)
      .then((res) => res.json())
      .then((json) => setData(json));
  },[]);

  return {
    data,
  };
};
