import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const divideWhen3xX = ()=>setCount(
    pCount => pCount % 3 === 0? pCount/3: pCount
  );

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <br></br>
      <button onClick={() => setCount((pCount) => pCount + 5)}>+5</button>
      <button onClick={() => setCount((pCount) => pCount - 5)}>-5</button>
      <br></br>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count * 2)}>*2</button>
      <button onClick={divideWhen3xX}>3の倍数の時だけ3で割る</button>
    </>
  );
};

export default App;
