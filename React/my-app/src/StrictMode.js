import { useEffect, useState, useMemo } from "react";
// not a good idea
// compoent jo pheli bar mount kiya may not have have same comp refs jab dusri bar mount kiya aur gurarnete nhi hai
// same component rhega how many times run kare koi farak nhi pdta dhang se work karna chaiye
let globalState = 0;
function StrictMode() {
  console.log("Strict");
  const [state, setState] = useState(0);
  // const handleChange = () => {};
  const doubleCount = useMemo(() => {
    console.log("Memo");
    return state * 2;
  }, [state]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // twice effect will be printed
    // component is mounted use useeffect unmounts the compoenent and again mounted the component
    // to clear side effects
    // i have not remove the side effects
    console.log("Effect");
    const handler = () => {
      console.log(count);
    };
    // strict mode telll u forget to clean up the sideeffects
    document.addEventListener("keypress", handler);
    // remove the side effcetcs
    return () => document.removeEventListener("keypress", handler);
  }, [count]);
  return (
    <>
      <button
        onClick={() =>
          setState((e) => {
            console.log("state");
            globalState = globalState + 1;
            return e + 1;
          })
        }
      >
        {state}*2 ={doubleCount}
      </button>

      <p>GlobalCount:- {globalState}</p>
      <button onClick={() => setCount((e) => e + 1)}>{count}</button>
    </>
  );
}

export default StrictMode;
