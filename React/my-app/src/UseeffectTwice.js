import { useEffect, useState } from "react";
const BadStopWatch = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Useeffect bad");
    setInterval(() => {
      setCount((e) => e + 0.1);
    }, 100);
  }, []);

  return <p>BadStopWatch:- {count.toFixed(1)}</p>;
};

const GoodStopWatch = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Useffect good");
    const interval = setInterval(() => {
      setCount((e) => e + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <p>GoodStopWatch:- {count.toFixed(1)}</p>;
};

function UseeffectTwice() {
  return (
    <>
      <BadStopWatch></BadStopWatch>
      <GoodStopWatch></GoodStopWatch>
    </>
  );
}

export default UseeffectTwice;
