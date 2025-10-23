import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [meridiem, setMeridiem] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();

      const formattedHour = hrs % 12 || 12;
      setHour(formattedHour < 10 ? `0${formattedHour}` : `${formattedHour}`);
      setMinutes(mins < 10 ? `0${mins}` : `${mins}`);
      setSeconds(secs < 10 ? `0${secs}` : `${secs}`);
      setMeridiem(hrs >= 12 ? "PM" : "AM");
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="time">
        <div className="hours">{hour || "HH"}</div>
        <div className="minutes">{minutes || "MM"}</div>
        <div className="second">{seconds || "SS"}</div>
        <div className="meridiem">{meridiem || "AM"}</div>
      </div>
    </div>
  );
};
