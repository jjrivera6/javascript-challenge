var tableData = data;


// Viewing the available data fromt he data.js
// console.log(tableData);


// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // https://www.w3schools.com/jsref/jsref_tolowercase.asp
    // var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    // var inputState = inputFieldState.property("value").toLowerCase().trim();
    // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("No UFO Sightings");
        }
})