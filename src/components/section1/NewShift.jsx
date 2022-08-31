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
  function addStartTime(e) {
    console.log(e.target.value);

    const inDate = new Date(e.target.value);
  }
  return (
    <div className=" w-screen h-screen bg-stone-300 fixed">
      <div className="flex flex-col w-fit mt-12 mx-auto bg-stone-100 p-5 rounded shadow">
        <div className="pn-shifts-list_header flex gap-x-4 text-black mb-4">
          <span className="   w-[191.79px]"> Start: </span>
          <span className=" w-[191.79px] "> End: </span>
        </div>
        {shiftMin}
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
        <input
          className=" p-1 rounded  border-[1px] border-stone-300"
          type="datetime-local"
          value="2022-08-04T19:32"
        />
      </div>
    </div>
  );
};

export default NewShift;
