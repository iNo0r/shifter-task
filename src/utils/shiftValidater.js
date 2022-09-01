// 2 things must be checked
// the start is not less or equal than the end
// a shift does not overlap with another shift

const dull = [
  [50, 60],
  [65, 70],
];

const newShift = [55, 70];
// const newShift = [1661940240000, 1662199440000];

// let testArray = [1, 2, 3, 4, "apple"];
// for (let item of testArray) {
//   console.log(item);
// }

export default function shiftValidater(shiftsList = [], newShift) {
  //   console.log("hola");

  const shiftStart = newShift[0];
  const shiftEnd = newShift[1];
  // checking that duration is not 0
  if (shiftStart === shiftEnd) {
    throw Error("working shift cannot be 0 minutes");
  }
  //   checking duration is not negative
  if (shiftStart > shiftEnd) {
    throw Error("shift cannot end before starting");
  }

  // checking overlapping
  shiftsList.forEach((shift, shiftIndex) => {
    // overlapping: checking if shiftStart occured during anohter shift
    if (shiftStart >= shift[0]) {
      if (shiftStart <= shift[1]) {
        throw Error(
          " start date cannot be set during another shift, see shift number " +
            (shiftIndex + 1)
        );
      }
    }
    // overlapping: checking if shiftEnd occured during anohter shift
    if (shiftEnd >= shift[0]) {
      if (shiftEnd <= shift[1]) {
        throw Error(
          " End date cannot be set during another shift, see shift number  " +
            (shiftIndex + 1)
        );
      }
    }
    // overlapping of shift start and end
    if (shiftStart < shift[0] && shiftEnd > shift[1]) {
      throw Error(" shift has overlaped with shift number " + (shiftIndex + 1));
    }
  });
  return true;
}

// shiftValidater(dull, newShift);
