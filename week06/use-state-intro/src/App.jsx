import "./App.css";
import { useState } from "react"; // useState is function that tells react to watch a variable for changes and when there is a change it should remember the state and re-render the component.

function App() {
  let [count, setCount] = useState(0); //useState returns an array with 2 things in it.The first thing is the state variable and the second is a fuction. You must us this function to update the state variable. const [1,()=>{}]

  function handleClick() {
    setCount(count++);
    console.log(count);
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>You clicked: {count} times</p>
    </div>
  );
}

export default App;
