//const url = "/data/samples.json";

// Fetch the JSON data and console log it
d3.json("/data/samples.json").then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
