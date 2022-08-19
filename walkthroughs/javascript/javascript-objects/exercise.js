console.log("Hello Objects");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  // find sum
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  // function updateSum(num) {
  //     sum += num;
  // }

  // arr.forEach(updateSum)
  arr.forEach((value) => {
    sum += value;
  });

  return sum;
}

let sum1 = arraySum(numbers);
let sum2 = arraySum([1, 2, 3, 4, 5]); // 15

console.log(sum1, sum2);

let a = 2;

a += 5; // a = a + 5

const add = (a, b) => {
  return a + b;
};

function printSquared(num) {
  console.log(num ** 2);
}

function iterate(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

iterate(numbers, printSquared);

iterate([1, 2, 3], function (num) {
  console.log(num + " value");
});

function forEach(func) {
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    let index = i;
    let array = numbers;

    func(value, index, array);
  }
}

forEach(console.log);
forEach((val) => {
  console.log(`Iterating over ${val}`);
});

// Exercise 2

let book = {
  title: "Name of The Wind",
  author: "Patrick Rothfuss",
  pages: 722,
  readCount: 3,
  info: function () {
    return `${this.title} by ${this.author} is ${this.pages} page(s) long, and has been read ${this.readCount} time(s).`;
  },
};

book.author; // "Patrick Rothfuss"

book.readCount++;

console.log(book.info());

// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

// function to reverse a string
function reverseStr(str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }

  return reversedStr;
}

function reverseWordsFromSentence(sentence) {
  // split a sentence into words
  let words = sentence.split(" ");
  // reverse each word in a array
  let reversedWords = words.map(function (word) {
    return reverseStr(word);
  });

  return reversedWords.join(" ");
}

console.log(reverseWordsFromSentence(sentence));

// Exercise 4

let csvData = "name,age,isFellowship\nFrodo,50,true\nSam,38,true\nMerry,36,true\nPippin,26,true\nBilbo,111,false";

console.log(csvData);

function toJSON(input) {
  let dataArr = input.split("\n");

  // get the headers
  let headers = dataArr[0].split(","); // "name,age" -> ["name", "age"]

  // get each record
  // returns a subarray from starting index, to ending index (if not supplied, end of array)
  let records = dataArr.slice(1);

  console.log(headers, records);

  let json = records.map(function (record) {
    let values = record.split(","); // "Frodo,50" -> ["Frodo", "50"]
    let obj = {};

    // add headers a properties on the obj
    // use the header index to grab the corresponding value at the same index
    headers.forEach(function (header, index) {
      obj[header] = values[index];
    })

    return obj;
  })

  return json;
}

let result = toJSON(csvData);
console.log(result);
