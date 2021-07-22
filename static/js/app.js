const url = "./static/data/samples.json";
// Function to initialize the application, does all setup for application to be rendered
// loads data and calls other functions with required arguments
function init() {
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
        buildCharts(data.samples[defaultID])
    });
};

//recalls function with updated arguments
function optionChanged(id) {
    d3.json("./static/data/samples.json").then(function (data) {
        console.log(`${id} selected`)
        var result = data.metadata.filter(meta => meta.id == id)[0]
        var sample = data.samples.filter(sample => sample.id == id)[0]
        console.log(`result: ${result}`)
        demoData(result);
        buildCharts(sample);
    })
}

// To do: 
function demoData(id) { //renders the demographic information supplied by optionChange
    var selectInfo = d3.select("#sample-metadata");
    selectInfo.html("");
    console.log(id);
    // selectInfo.append("p").text(`metadata for ${Object.entries(id)}`)
    Object.entries(id).forEach(([key, value]) => {
        selectInfo.append("p").text(`${key}: ${value}`);
        //To do: Replace debug test with actual metadata
    });
};

function buildCharts(sample) { // renders the charts
    // var sample = data.samples.filter(sample => sample.id == id)[0]
    console.log(sample)
    //--------------------------------------//
    var otu_ids = sample.otu_ids;
    var otu_labels = sample.otu_labels;
    var sample_values = sample.sample_values;
    var bubbledata = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "YlGnBu"
        }
    }];
    var bardata = [{
        y: otu_ids.slice(0, 10).map(val => `OTU ${val}`).reverse(),
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
    }]

    Plotly.newPlot("bar", bardata);
    Plotly.newPlot("bubble", bubbledata);
    //---------------------------------------------//
}

init();

// *************************************