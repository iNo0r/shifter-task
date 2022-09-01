import { useMemo } from "react";
import { useState } from "react";

import toTimeStamp from "../../utils/toTimestamp";

const NewShift = ({ submitShift, newshiftIndex }) => {
  const [shiftStart, setStart] = useState("");
  const [shiftEnd, setEnd] = useState("");
  const [isAnother, setAnother] = useState(false);
  const shiftMin = useMemo(() => {
    if (shiftStart) {
      let dated = new Date(shiftStart);
      let formatted = dated.toISOString();
      return formatted.slice(0, 16);
    }
    return "";
  }, [shiftStart]);
  const shiftMax = useMemo(() => {
    if (shiftEnd) {
      let dated = new Date(shiftEnd);
      let formatted = dated.toISOString();

      return formatted.slice(0, 16);
    }
    return "";
  }, [shiftEnd]);

  function handleSubmit() {
    if (shiftStart && shiftEnd) {
      if (submitShift([toTimeStamp(shiftStart), toTimeStamp(shiftEnd)])) {
        setStart("");
        setEnd("");
        setAnother(false);
      }
    }
  }
  return (
    <div className="flex flex-col gap-y-2">
      {isAnother && (
        <div className="pn-shit flex gap-x-2 items-center ">
          <div className=" w-4 "> {newshiftIndex} </div>
          <div className=" flex w-full gap-x-2">
            <input
              className=" p-1 rounded  border-[1px] border-stone-300 w-full"
              type="datetime-local"
              name=""
              id=""
              value={shiftStart}
              onChange={(e) => setStart(e.target.value)}
              max={shiftMax}
            />
            <input
              className=" p-1 rounded  border-[1px] border-stone-300 w-full"
              type="datetime-local"
              name=""
              id=""
              value={shiftEnd}
              onChange={(e) => setEnd(e.target.value)}
              min={shiftMin}
            />
          </div>
        </div>
      )}

      <div className="flex ">
        <button
          onClick={handleSubmit}
          className={` p-1 rounded bg-slate-800 text-stone-100 disabled:bg-slate-300 w-full transition-all duration-300  relative ${
            !isAnother && " hidden  opacity-0  w-0 "
          } `}
          disabled={!shiftStart || !shiftEnd}
        >
          submit
        </button>
        <button
          className={` p-1 bg-red-800 text-white w-full rounded ${
            isAnother && " w-0 hidden"
          } `}
          onClick={() => setAnother(true)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewShift;
