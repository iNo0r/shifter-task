import { useMemo } from "react";
import { useState } from "react";
import NewShift from "./ClassicShifter/NewShift";
import ShiftsListComponent from "./ClassicShifter/shiftsList";

import shiftValidater from "../utils/shiftValidater";
import { useEffect } from "react";
import { useRef } from "react";
import listSorter from "../utils/listSorter";

const ClassicShifter = () => {
  const [shiftsList, setShiftsList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [shifterError, setShifterErrow] = useState("");
  const loaded = useRef(false);

  function showErrowfor2s() {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 3000);
  }

  function submitShift(shiftTimeStampObject) {
    try {
      shiftValidater(shiftsList, shiftTimeStampObject);
    } catch (e) {
      console.log(e);
      showErrowfor2s();
      setShifterErrow(e.message);
      return false;
    }
    setShiftsList((prev) => {
      let thelist = [...prev];
      thelist.push(shiftTimeStampObject);

      let sortedList = listSorter(thelist);
      return sortedList;
    });
    updateDataToStorage();
    return true;
  }

  function updateDataToStorage() {
    const dataStringified = JSON.stringify(shiftsList);
    localStorage.setItem("shiftsList", dataStringified);
    console.log(localStorage.getItem("shiftsList"));
  }
  function loadDataFromStorage() {
    let dataParsed = JSON.parse(localStorage.getItem("shiftsList"));
    setShiftsList(dataParsed);
  }

  function clearList() {
    setShiftsList([]);
  }

  useEffect(() => {
    if (!loaded.current) {
      loadDataFromStorage();
      loaded.current = true;
    }
  }, []);
  useEffect(() => {
    if (loaded.current) {
      updateDataToStorage();
    }
  }, [shiftsList]);

  return (
    <div className=" w-screen h-screen bg-stone-300 fixed">
      <div className="flex flex-col w-full max-w-lg mt-12 mx-auto bg-stone-100 p-5 rounded shadow">
        <ShiftsListComponent shiftsList={shiftsList} />
        <NewShift
          newshiftIndex={shiftsList.length + 1}
          submitShift={submitShift}
        />
        <ClearListBtn clearList={clearList} />
        <ErrorHandlingComponent isError={isError} shifterError={shifterError} />
      </div>
    </div>
  );
};

export default ClassicShifter;

const ClearListBtn = ({ clearList }) => {
  return (
    <button className=" bg-stone-300 rounded p-2 mt-4 bg " onClick={clearList}>
      Clear List
    </button>
  );
};

const ErrorHandlingComponent = ({ isError, shifterError }) => {
  return <div className=" text-red-500">{isError ? shifterError : ""}</div>;
};
