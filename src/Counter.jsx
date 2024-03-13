import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Counter:{count} </h3>

      <button style={{ backgroundColor: "green" }} onClick={handleAdd}>
        Add
      </button>

      <button style={{ backgroundColor: "orange" }} onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
}
