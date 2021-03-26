// app.js for javascript-challenge

// select the bable body using d3
var bodybodybody=d3.select("tbody");

//populate the table with data
data.forEach((ufo_sighting)=>{
  var rowrowrow=bodybodybody.append('tr');
  Object.entries(ufo_sighting).forEach(([key, value]) => {
    rowrowrow.append('td').text(value);
})});


// copy the data and select the filter using d3
var copy_data=data
var filterButton=d3.select('#filter-btn');
var form=d3.select('form');

// give instructions for what should happen when the button is clicked or user hits enter
filterButton.on("click",runEnter);
form.on("submit",runEnter);

// define the function that is executed when the user clicks the button or hits enter
function runEnter() {
  d3.event.preventDefault();
  bodybodybody.text("");
  var dateEntered=d3.select('#datetime')
  var input_value=dateEntered.property('value');
  var filtered_data=copy_data.filter(sighting =>sighting.datetime==input_value);
  filtered_data.forEach((sighting)=>{
    var rowrowrow=bodybodybody.append('tr');
    Object.entries(sighting).forEach(([key, value])=>{
      rowrowrow.append('td').text(value);
    })});
  };