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
  var auditBtn1 = document.getElementById("tbx_user").value.trim();
  var auditBtn2 = document.getElementById("tbx_task").value.trim();

  if (auditBtn1 === "" || auditBtn2 === "") {
    alert("Please fill in both task boxes for audit purposes.");
  } else {
    window.location.href = "index.html";
  }
}