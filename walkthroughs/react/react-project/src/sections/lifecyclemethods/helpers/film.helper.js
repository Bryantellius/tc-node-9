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

// export function getFilmStats(list) {
//   let stats = {
//     acc_score: null,
//     avg_score: null,
//     total: list.length,
//     latest: null,
//   };

//   // find stats
//   for (let film of list) {
//     stats.acc_score += parseInt(film.rt_score);

//     if (!stats.latest || stats.latest < film.release_date) {
//       stats.latest = film.release_date;
//     }
//   }

//   stats.avg_score = stats.acc_score / stats.total;

//   return stats;
// }

export function getFilmStats(list) {
  // find stats
  return list.reduce(
    (stats, film, idx) => {
      stats.acc_score += parseInt(film.rt_score);

      if (!stats.latest || stats.latest < film.release_date) {
        stats.latest = film.release_date;
      }

      // If this film is the last film
      if (idx == list.length - 1) {
        stats.avg_score = stats.acc_score / stats.total;
      }

      return stats;
    },
    {
      acc_score: 0,
      avg_score: null,
      total: list.length,
      latest: null,
    }
  );
}
