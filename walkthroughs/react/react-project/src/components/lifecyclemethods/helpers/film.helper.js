export function filterFilmsByDirector(list, director) {
  if (director == "") {
    return list;
  } else {
    return list.filter((film) => film.director == director);
  }
}

export function getListOf(list, prop) {
  // return a unique list of property values from each item in the input list
  return list.reduce((uniqueValues, item) => {
    let value = item[prop] || "";

    // have I already found the value?
    // if no, add the value to the uniqueValues array
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }

    return uniqueValues;
  }, []);
}
