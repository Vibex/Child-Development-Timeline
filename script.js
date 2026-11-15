// Source - https://stackoverflow.com/a/61312077
// Posted by Santosh Kumar
// Retrieved 2026-10-16, License - CC BY-SA 4.0

// Change to your URL (Must have Access-Control-Allow-Origin header to allow CORS)
var csvUrl = 'https://raw.githubusercontent.com/Vibex/Child-Development-Timeline/refs/heads/main/data';


function handleCSVResult(csvString) {
  // Get the div element to append the data to
  var dataArea = document.querySelector('#csv_data');
  
  // Split csv to rows
  var rows = csvString.split('\n');

  // Var to store all additions to the webpage
  var htmlStr = '';


  // FORMATTING VARIABLES
  // The div class to prepend to the totality of the information
  var eventPrefix = '<div class="timeline__event animated fadeInUp delay-1s timeline__event--type1">';
  // The div class to prepend to the icon
  var iconPrefix = '<div class="timeline__event__icon ">';
  // The div class to prepend to the timestamp
  var stampPrefix = '<div class="timeline__event__date">';
  // The div class to prepend to the text box
  var boxPrefix = '<div class="timeline__event__content ">';
  // The div class to prepend to the title
  var titlePrefix = '<div class="timeline__event__title">';
  // The div class to prepend to the content
  var contentPrefix = '<div class="timeline__event__description"><p>';
  // The default div closure
  var genSuffix = '</div>';
  // The default div closure for paragraphs
  var pSuffix = '</p>';

  // Default Icon
  var icon = '<i class="lni-cake"></i>';
  
  // Iterate over each row
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    
    // split row to cells
    var cells = row.split(',,');
    
    // Extract data from cell 1 and 2 of current row
    var category = cells[0];
    var demographic = cells[1];
    var title = cells[2];
    var content = cells[3];
    var startValue = cells[4];
    var startText = cells[5];
    var endValue = cells[6];
    var endText = cells[7];
    var durationText = cells[8];
    var citation = cells[9];

    
    // Add extracted CSV data to string
    htmlStr += eventPrefix + iconPrefix + icon + genSuffix + stampPrefix + startText + genSuffix + boxPrefix + titlePrefix + title + genSuffix + contentPrefix + content + pSuffix + genSuffix + genSuffix + genSuffix;
    //htmlStr = 'TEST';
  }
  
  // Set the string generated from CSV as HTML of the dedicated div
  dataArea.innerHTML = htmlStr;
}

// Init Ajax Object
var ajax = new XMLHttpRequest();

// Set a GET request to the URL which points to your CSV file
ajax.open('GET', csvUrl);

// Set the action that will take place once the browser receives your CSV
ajax.onreadystatechange = function() {
  if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
    // Request was successful
    var csvData = ajax.responseText;

    // Do something with that data here
    handleCSVResult(csvData);
  }
}

// Send request
ajax.send();