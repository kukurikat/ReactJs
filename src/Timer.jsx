import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function PadZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <>
      {PadZero(time.getHours())}:{PadZero(time.getMinutes())}:
      {PadZero(time.getSeconds())}
    </>
  );
}

export default Timer;
