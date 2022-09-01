function listSorter(list = []) {
  let sortedList = list.sort((a, b) => {
    if (a[0] < b[0]) {
      console.log();
      return -1;
    }
    return 1;
  });

  return sortedList;
}

export default listSorter;
