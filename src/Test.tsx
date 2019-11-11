import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

const Test = observer(() => {
  const [count, setCount] = useState(0);

  const add = (name: string) => {
    console.log(name);
    setCount(count + 1);
  };

  useEffect(() => console.log("mounted"), []);

  return (
    <React.Fragment>
      <div>Hello there!</div>
      <button onClick={() => add("test")}>{count}</button>
    </React.Fragment>
  );
});

export default Test;
