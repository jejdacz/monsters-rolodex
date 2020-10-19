function fetch() {
  //return Promise.reject(new Error("connection failed"));
  return Promise.resolve({
    ok: false,
    status: 200,
    json() {
      return Promise.resolve({ key: "value" });
    },
  });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

async function fetchMoviesBadStatus() {
  try {
    const response = await fetch("/oops");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const movies = await response.json();
    console.log(movies);
  } catch (err) {
    console.log(err.message);
  }
}
/*
fetch()
  .then((response) =>
    response.ok
      ? Promise.resolve(response)
      : Promise.reject(new Error("bad response"))
  )
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));
*/
fetchMoviesBadStatus();
/*
fetch("http://httpstat.us/500")
  .then(handleErrors)
  .then((response) => console.log("ok"))
  .catch((error) => console.log("error occured"));*/
