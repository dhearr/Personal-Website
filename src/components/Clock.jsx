import { useState, useEffect } from "react";
import moment from "moment";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss a"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss a"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 className="pixel-text text-[8px]">{currentTime}</h1>
    </>
  );
};

export default Clock;
