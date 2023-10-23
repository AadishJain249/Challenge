import React, { useRef, useState, useEffect } from "react";
import "./Infinte.css";
function Infinte(props) {
  // console.log("render child");
  const [loading, setLoading] = useState(false);
  const { getData, query, listData, renderListItem } = props;
  const pageNo = useRef(1);
  const observer = useRef(null);
  const lastElement = (node) => {
    // console.log(node);
    // console.log("Last Element");
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        pageNo.current += 1;
        fetchData();
      }
    });
    if (node) observer.current.observe(node);
  };
  const renderItem = () => {
    // console.log("Child Render Item");
    return listData.map((item, idx) => {
      if (idx === listData.length - 1)
        return renderListItem(item, idx, lastElement);
      return renderListItem(item, idx, null);
    });
  };
  const fetchData = () => {
    // console.log("Fetch Data Child");
    setLoading(true);
    getData(query, pageNo.current).finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <>
      {renderItem()}
      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Infinte;
