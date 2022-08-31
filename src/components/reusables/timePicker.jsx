import { useState } from "react";

const TimerPicker = () => {
  const hoursValues = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "23",
  ];
  const minutesValues = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "40",
    "45",
    "50",
    "55",
    "60",
  ];
  const [minutesInput, setminutesInput] = useState("00");
  const [hoursInput, setHoursInput] = useState("00");
  const [isList, setlist] = useState(false);
  function showList() {
    setlist(!isList);
  }
  function unshowList() {
    // setTimeout(() => {
    setlist(!isList);
    // }, 100);
  }

  return (
    <div className="timerpicker flex">
      <div className=" relative bg-white flex  " onBlur={unshowList}>
        <input
          type="text"
          className=" pl-1 focus:bg-slate-300 outline-none w-6"
          onFocus={showList}
          value={hoursInput}
          readOnly
        />
        {isList && (
          <div className="pn-hours-options absolute top-full flex flex-col h-20 overflow-scroll z-30 w-full ">
            {hoursValues.map((value) => (
              <div
                className="bg-red-200  cursor-pointer"
                onMouseDownCapture={() => setHoursInput(value)}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" relative bg-white flex " onBlur={unshowList}>
        <span>:</span>
        <input
          type="text"
          className="pn-minutes-options pl-1 focus:bg-slate-300 outline-none w-7 "
          onFocus={showList}
          value={minutesInput}
          readOnly
        />
        {isList && (
          <div className="pn-hours-options absolute top-full flex flex-col h-20 overflow-scroll z-30 w-8 ">
            {minutesValues.map((value) => (
              <div
                className="bg-red-200  cursor-pointer"
                onMouseDownCapture={() => setminutesInput(value)}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerPicker;
