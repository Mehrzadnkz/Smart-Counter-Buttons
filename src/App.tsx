import { useState } from "react";
import { button } from "./../public/components/functions/functions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="border-2 border-dashed p-5 m-5">
      <div className="flex flex-row justify-center gap-2 items-center">
        {button("Increase", () => setCount(count + 1), "green")}
        <h2 className="text-xl mb-1">Count : {count}</h2>
        {button("Decrease", () => { if (count > 0) setCount(count - 1); else alert("Count cannot be negative"); }, "red")}
      </div>
      <div className="flex justify-center">
        {button("Reset", () => { if (count > 0) { alert("Count has been reset"); setCount(0); } else alert("Count is already 0"); }, "gray")}
      </div>
    </div>
    </>
  );
}

export default App;
