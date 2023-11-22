import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("component update");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}seconds</h3>
      <button>update per 1</button>
    </div>
  );
}

export default TimerComponent;
