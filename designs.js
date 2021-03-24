// Reference : https://knowledge.udacity.com/

// Select color input
let gridColor = document.querySelector("#colorPicker");
// Select size input
var pixelGrid = document.getElementById("pixelCanvas")

// on click on Submit button, makegrid() is called
var onSubmit = document.getElementById('submitButton');

onSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  // To clear old grid values
  pixelGrid.innerHTML = "";
  // Select height and width of the grid
  let height = document.querySelector("#inputHeight").value;
  let width = document.querySelector("#inputWidth").value;
  pixelGrid.innerHTML = "";
  makeGrid(height, width);

});


function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let row = pixelGrid.insertRow(i);
      for (let j = 0; j < width; j++) {
        let column = row.insertCell(j);
    }
  }
}

// add eventlistener to change the grid color
pixelGrid.addEventListener("click", function (event) {
  event.target.style.backgroundColor = gridColor.value;
});



