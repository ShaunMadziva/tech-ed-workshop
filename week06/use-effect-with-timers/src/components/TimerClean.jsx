import { useEffect, useState } from "react";

export default function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}
