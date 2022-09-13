export function filterFilmsByDirector(list, director) {
  if (director == "") {
    return list;
  } else {
    return list.filter((film) => film.director == director);
  }
}

export function getListOf(list, prop) {
    // return a unique list of property values from each item in the input list
}
