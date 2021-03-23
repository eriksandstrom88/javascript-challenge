// index.js for javascript-challenge
var bodybodybody=d3.select("tbody");

data.forEach((ufo_sighting)=>{
  var rowrowrow=bodybodybody.append('tr');
  Object.entries(ufo_sighting).forEach(([key, value]) => {
    rowrowrow.append('td').text(value);
})});

// var dateEntered=d3.select('.datetime');
// var filterButton=d3.select('.filter-btn');
var copy_data=data
var filterButton=d3.select('#filter-btn');
var form=d3.select('form');
filterButton.on("click",runEnter);
form.on("submit",runEnter);

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