import { useMemo } from "react";
import { useState } from "react";

const NewShift = () => {
  const [shiftStart, setStart] = useState("");
  const [shiftEnd, setEnd] = useState("");
  const shiftMin = useMemo(() => {
    if (shiftStart) {
      let dated = new Date(shiftStart);
      let formatted = dated.toISOString();
      console.log(formatted);
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
  return (
    <div className="flex flex-col">
      <div className="pn-shit flex gap-x-4">
        <input
          className=" p-1 rounded  border-[1px] border-stone-300"
          type="datetime-local"
          name=""
          id=""
          onChange={(e) => setStart(e.target.value)}
          max={shiftMax}
        />
        <input
          className=" p-1 rounded  border-[1px] border-stone-300"
          type="datetime-local"
          name=""
          id=""
          onChange={(e) => setEnd(e.target.value)}
          min={shiftMin}
        />
      </div>
      <button className=" p-1 rounded bg-slate-300"> submit </button>
      <button> Add Another</button>
    </div>
  );
};

export default NewShift;
