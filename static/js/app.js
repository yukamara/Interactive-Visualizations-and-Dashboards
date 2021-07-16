const url = "./static/data/samples.json";

// Fetch the JSON data and console log it
// d3.json(url).then(function (data) {
//   console.log(data);
// });

// // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// Function to select test subject ID
function init() {  // Initialises the application, does all setup for application to be rendered
  // loads data and calls other functions with required arguments
  // read in data
  d3.json(url).then(function (data) {
    // Check the data on the console
    console.log(data);
    var defaultID = 0//"940"
    // grab the subject id #s from data json
    var idNumber = data.names;
    var selectID = d3.select("#selDataset")
    idNumber.forEach(function (subjectID) {
      selectID.append("option").text(subjectID)
    })
    demoData(data.metadata[defaultID])
  });
};

function optionChanged(id) { //recalls function with updated arguments
  d3.json(url).then(function (data) {
    console.log(`${id} selected`)
    var result = data.metadata.filter(meta => meta.id == id)[0]
    console.log(result)
    demoData(result)
  })
}

// To do: 
function demoData(id) { //renders the demographic information supplied by optionChange
  var selectInfo = d3.select("#sample-metadata")
  selectInfo.html("")
  console.log(id)
  selectInfo.append("p").text(`metadata for ${Object.entries(id)}`)

  // Object.entries(filterresult).forEach(([key, value]) => {
  //   display.append("h6").text(`${key} ${value}`);
  // To do: Replace debug test with actual metadata
}

function buildCharts(sample) { // renders the charts
  var sample = data.samples.filter(sample => sample.id == id)[0]
  console.log(sample)
  buildCharts(sample)

}

init();


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