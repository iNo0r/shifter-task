import { useState } from "react";
import TimePicker from "./reusables/timePicker";

const Section1 = () => {
  const minutesValues = [0, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55, 60];
  const [inputValue, setInputValue] = useState(0);
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
    <div className="w-screen h-screen bg-slate-200 fixed top-0">
      <div className=" mt-6 mx-auto w-full max-w-4xl">
        <TimePicker />
      </div>
    </div>
  );
};

export default Section1;
