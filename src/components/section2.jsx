import { useMemo } from "react";
import { useState } from "react";
import NewShift from "./section2/NewShift";

const Section2 = () => {
  const [shiftsList, setShiftsList] = useState([]);

  function submitShift(shiftTimeStampObject) {
    setShiftsList((prev) => {
      let thelist = [...prev];
      thelist.push(shiftTimeStampObject);

      return shiftTimeStampObject;
    });
  }

  return (
    <div className=" w-screen h-screen bg-slate-800 fixed">
      <div className="flex flex-col w-fit mt-12 mx-auto bg-stone-100 p-5 rounded shadow">
        <div className="pn-shifts-list_header flex gap-x-4 text-black mb-4">
          <span className="   w-[191.79px]"> Start: </span>
          <span className=" w-[191.79px] "> End: </span>
        </div>
        <NewShift submitShift="submitShift" />
      </div>
    </div>
  );
};

export default Section2;
