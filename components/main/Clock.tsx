import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isHourTwelve, setIsHourTwelve] = useState<boolean>(true);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock">
      <span onClick={() => setIsHourTwelve(!isHourTwelve)}>
        {time.toLocaleTimeString("en-US", {
          hour12: isHourTwelve,
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
};

export default Clock;
