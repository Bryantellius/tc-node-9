"use strict";

console.log("Hello Error Handling!");

// Load LinkedIn posts
// Get the posts asynchronously from a server

function callback(resolve, reject) {
  setTimeout(() => {
    let shouldSucceed = Boolean(Math.round(Math.random()));
    if (shouldSucceed) {
      // if success
      // pass the success value into resolve()
      resolve({ success: true, data: ["post1", "post2", "post3"] });
    } else {
      // if failure
      // pass the error or failure value into reject()
      reject({ success: false, message: "Failed to load posts" });
    }
  }, 5000);
}

let promise = new Promise(callback);

function handleSuccess(result) {
  console.log("Was successful: ", result.success);
  return result.data;
};

promise
  .then(handleSuccess)
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise is fulfilled"));

// promise.catch((err) => console.error(err));

console.log("This log is after promise");

// Async/await

async function getPosts() {
  let shouldSucceed = Boolean(Math.round(Math.random()));
  if (shouldSucceed) {
    // if success
    // return the success value
    return { success: true, data: ["post1", "post2", "post3"] };
  } else {
    // if failure
    // throw the error or failure value
    throw { success: false, message: "Failed to load posts" };
  }
}

// Async functions return a promise
async function printPosts() {
  try {
    let result = await getPosts();
    console.log(result.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise is fulfilled");
  }
}

printPosts();
