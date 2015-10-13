var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;
	console.log("loop count", loopCount);
// Keep track of which band we're on in the loop
var currentBand = "";
	console.log(currentBand, "current band");
// Keep track of which veggie we're on in the loop
var currentVeggie = "";
	console.log(currentVeggie, "current veggie");
// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boyBands");
	console.log("band element", bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
	console.log("veggieElement", veggieElement);
// Start looping
var bandoutput = "";
var veggieOutput = "";
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  console.log("currentBand", loopTracker, currentBand);
  currentVeggie = vegetables[loopTracker];
  console.log(bandoutput);

  bandoutput = bandoutput + "<p>" + currentBand + "</p>";
  veggieOutput = veggieOutput + "<p>" + currentVeggie + "</p>";

}
  bandElement.innerHTML = bandoutput;
  veggieElement.innerHTML = veggieOutput;


  // Add the veggie names into the correct <div>
 // currentVeggie = ???;



 
