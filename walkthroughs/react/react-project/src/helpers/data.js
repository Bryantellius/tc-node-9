export async function getData(category) {
  try {
    let res = await fetch(`https://ghibliapi.herokuapp.com/${category}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function apiService(url, method = "GET", body) {
  try {
    let options = {
      method,
    };

    if (body && method != "GET") {
      options.body = JSON.stringify(body);
    }

    let res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Invalid results");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return false;
  }
}
