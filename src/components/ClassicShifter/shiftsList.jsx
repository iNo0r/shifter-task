const ShiftsList = ({ shiftsList }) => {
  function toStringDate(timeStampe) {
    let dated = new Date(timeStampe);

    // because when converting a timestampe to uso  string it will return the utc time, this variable below will make the sure that the date string returned is a local string to show as a shift
    let convertedTolocasDateString = new Date(
      new Date(timeStampe).getTime() - new Date().getTimezoneOffset() * 60000
    ).toISOString();

    return convertedTolocasDateString.slice(0, 16);
    // return new Date(timeStampe).toISOString().slice(0, 16);
  }

  return (
    <>
      <div className="pn-shifts-list_header flex gap-x-2 text-yellow-700 mb-4">
        <span className=" w-4 "># </span>
        <div className=" flex justify-between w-full gap-x-2">
          <span className=" w-full   "> Start: </span>
          <span className=" w-full  "> End: </span>
        </div>
      </div>
      {shiftsList.length < 1 && (
        <>
          <h3 className=" text-lg text-stone-700 "> Welcome! </h3>
          <p className="text-sm text-stone-400"> No shifts to be displayed </p>
        </>
      )}
      <div className="flex flex-col gap-y-2 mb-2">
        {shiftsList &&
          shiftsList.map((item, index) => (
            <div className="pn-shfit flex gap-x-2" key={index}>
              <div className=" w-4 "> {index + 1} </div>
              <div className=" flex w-full gap-x-2 ">
                <input
                  className=" p-1 rounded w-full  border-[1px] border-stone-300"
                  type="datetime-local"
                  name=""
                  id=""
                  value={toStringDate(item[0])}
                  readOnly
                  disabled
                />
                <input
                  className=" p-1 rounded w-full border-[1px] border-stone-300"
                  type="datetime-local"
                  name=""
                  id=""
                  value={toStringDate(item[1])}
                  readOnly
                  disabled
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShiftsList;
