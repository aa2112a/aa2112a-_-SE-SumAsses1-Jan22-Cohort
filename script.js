function StandardiseNumbers() {
  /* 
  This function standarsises numbers using googles libphonenumber library
  The function takes a list of input telephone numbers standardises the numbers to E146 format
  then the phone numbers are enriched with other data
  the results are then formatted and output the output text box
  URL - https://github.com/google/libphonenumber
  */
 }

function validateAndNavigate() {
  /*
  This function checks the contents of the 2 audit text boxes to ensure neiher are empty
  The function does not check the validity of the text input
  If the text boxes pass the test then the user will navigate to the index page, ese an error will be shown
  */

  var auditBtn1 = document.getElementById("tbx_user").value.trim();
  var auditBtn2 = document.getElementById("tbx_task").value.trim();

  if (auditBtn1 === "" || auditBtn2 === "") {
    alert("Please fill in both task boxes for audit purposes.");
  } else {
    window.location.href = "index.html";
  }
}

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  const outputTextarea = document.getElementById('inputText');

  reader.onload = function(e) {
    const contents = e.target.result;
    const rows = contents.split('\n');
    const columnData = [];

    // Assuming the column index you want to extract is 0 (first column)
    const columnIndex = 0;

    rows.forEach(function(row) {
      const columns = row.split(',');
      if (columns.length > columnIndex) {
        columnData.push(columns[columnIndex].trim());
      }
    });

    outputTextarea.innerHTML = columnData.join('\n');
  };

  reader.readAsText(file);  
});
