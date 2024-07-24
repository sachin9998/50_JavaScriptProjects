function makeAPICall(url) {
  return fetch(url).then((response) => response.json());
}

function handleData(data) {
  console.log("Processed Data :: ", data);
}

function main() {
  const apiurl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiurl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeAPICall(apiurl1)
    .then(handleData)
    .catch((error) => console.log(error));
  makeAPICall(apiurl2)
    .then(handleData)
    .catch((error) => console.log(error));
}

main();
