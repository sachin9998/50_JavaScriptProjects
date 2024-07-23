function makeAPICall(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function handleData(data) {
  console.log("Processed Data :: ", data);
}
// url = "https://jsonplaceholder.typicode.com/posts";

function main() {
  const apiurl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiurl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeAPICall(apiurl1, handleData);
  makeAPICall(apiurl2, handleData);
}

main();
