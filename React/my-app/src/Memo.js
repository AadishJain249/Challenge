// doesnt keep logs of prev component it does compare previous props to new props when props are change it renders
import { useMemo, useState, useCallback, memo } from "react";
import React from "react";
function Swatch({ param, onClick }) {
  console.log(`Color Render ${param.color}`);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: param.color }}
      onClick={onClick}
    ></div>
  );
}
// alternative use useMemo
// const MemoSwatch=memo(Swatch,(prev,nextProps)=>{
//   return prev.param.color===nextProps.param.color
// })

const MemoSwatch = memo(Swatch);
function Memo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  // useMemo for objects and array
  // useCallback for functions
  // bad case for useMemo
  // compare by value
  // running this fxn , dependency result , caching result all useMemo will do bad idea for this
  // const val=useMemo(()=>num1+num2,[num1,num2])
  // when this dependency array doesnt change it will return exactly same result
  const params = useMemo(() => ({ color }), [color]);
  const onClick=useCallback(()=>{},[])
  console.log(`App render ${count}`);
  return (
    <>
      <h1>Namaste Aadish React</h1>
      <button onClick={() => setCount(count + 1)}>Render</button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Color Change
      </button>
      {/* problem is that it us using objec and every time a new reference is created and react do
      shallow comparision */}
      <MemoSwatch param={params} onClick={onClick}></MemoSwatch>
      {/* <MemoSwatch color={color==="red"?"blue":"red"}></MemoSwatch> */}
    </>
  );
}

export default Memo;
