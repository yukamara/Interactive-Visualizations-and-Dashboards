const url = "./static/data/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
 console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


var unitName = data.names;
var 


// var data = [{
//   y:['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'], 
//     x: [90, 40, 60, 80, 75, 92, 87, 73],
//     type: 'bar',
//     orientation: 'h'}]

// var layout = {
//   title: 'Always Display the Modebar',
//   showlegend: false}


// ***********************************************************************************************************************
// 