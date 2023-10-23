import { useState } from "react";
const ls = [
  {
    description: "A",
    id: 1,
  },
  {
    description: "B",
    id: 2,
  },
  {
    description: "C",
    id: 3,
  },
  {
    description: "D",
    id: 4,
  },
];
function ToggleAndDelete() {
  return <Show list={ls}></Show>;
}
function Show(props) {
  console.log("render");
  const [item, setItem] = useState([]);
  const [list, setList] = useState(props.list);
  const handleClick = (id) => {
    if (!item.includes(id)) {
      setItem(item.concat(id));
    } else {
      let val = id;
      let temp = item;
      temp = temp.filter(function (items) {
        return items !== val;
      });
      setItem(temp);
    }
  };
  const handleDelete = (id) => {
    setList(list.filter((e) => e.id !== id));
  };
  console.log(list);
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {list.map((list, idx) => (
          <li key={list.id}>
            <input
              type="checkbox"
              onClick={() => {
                handleClick(list.id);
              }}
            ></input>
            {list.description}
            {item.includes(list.id) && (
              <button
                onClick={() => {
                  handleDelete(list.id);
                }}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ToggleAndDelete;
