import React, { useEffect, useState } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      const timeNow = new Date();
      setHours(timeNow.getHours());
      setMinutes(timeNow.getMinutes());
      setSeconds(timeNow.getSeconds());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {hours > 10 ? hours : <>0{hours}</>}:
      {minutes > 10 ? minutes : <>0{minutes}</>}:
      {seconds > 10 ? seconds : <>0{seconds}</>}
      yay
    </>
  );
}

export default Timer;
