export function getRandomNum(min = 0, max = 10) {
  return Math.round(Math.random() * (max - min) + min);
}

export function updateEleText(query, text) {
  document.querySelector(query).textContent = text;
}

export function countDuplicates(list) {
  return list.reduce((sum, num, idx) => {
    if (idx != list.indexOf(num)) {
      return sum + 1;
    }

    return sum;
  }, 0);
}
