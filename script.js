function StandardiseMSISDNs(inputMSISDN) {
  /*
  This function takes a MSISDN (type str) as an input, standardises the input useing a set of rules and returns
  a standardised MSISDN

  input parameter: inputMSISDN - str MSISDN to be standardised
  return: str - standardised MSISDN or error
  */
  console.log("StdMsisdns is processing:" + inputMSISDN)

  // check MSISDN is of type string
  if (typeof inputMSISDN === 'string') 
    // remove '000' or '00' from the start of the MSISDN e.g 00031412345678 => 31412345678
    {var processingMsisdn = inputMSISDN.replace(/^0{3}|^0{2}/, '0')}
  else
    {throw new Error('input is not a string');}  // Error type not string

  // Check if MSISDN starts with '7' it is of length 10 then add preceeding 0 (UK mobile)
  // e.g 79123458 => 07912345678
  if (inputMSISDN.length === 10 && inputMSISDN.startsWith('7'))
    {console.log("adding leading zero")
      processingMsisdn = '0' + inputMSISDN}

  // check length of MSISDN is at least 7 digits, else it's rejected as a legitimate MSSIDN
  if (processingMsisdn.length <= 7)
    {return (inputMSISDN + ' is not a valid msisdn (Reason: short length)')}
  
  // check length of MSISDN is at max 14 digits, else it's rejected as a legitimate MSSIDN
  else if (processingMsisdn.length >= 14)
    {return (inputMSISDN + ' is not a valid msisdn (Reason: long length)')}
  else {
    // if MSISDN is a UK mobile starting '07' then replace with international dial code '+44'
    // e.g 07912345678 => +447912345678
    if (processingMsisdn.length === 11 && processingMsisdn.startsWith('07'))
    {console.log("adding uk suffix")
    processingMsisdn = '+44' + processingMsisdn.substring(1);}
    // if MSISDN passes above tests but does not have a prefix '+' then it's added
    // e.g 447912345678 => +447912345678
    else{
      console.log("adding non uk suffix")
      processingMsisdn = '+' + processingMsisdn;
    }
  }

  // return standardised MSISDN
  return processingMsisdn
}

function processMSISDNS() {
   /*
  This function runs when 'process' button is clicked. 
  It creates a list from strings in the input box and passes them to the StandardiseMSISDNs function
  */

  // define variables and constants
  var inputMsisdns = document.getElementById("inputText").value.trim();
  var processedMsisdns = [];
  const outputTextarea = document.getElementById('outputText');
  const msisdnList = inputMsisdns.split('\n');

  console.log('Captured input list: ' + inputMsisdns)
  console.log('split input list: ' + msisdnList)

// Loop through each item in list inputMsisdns
// pass it to function StandardiseMSISDNs
// add the output to list processedMsisdns
for (var i = 0; i < msisdnList.length; i++) {
  console.log('Processing a value (' + i + '): ' + msisdnList[i])
    var result = StandardiseMSISDNs(msisdnList[i]); // Call function p with the current item
  console.log('Processed to: ' + result)
    processedMsisdns.push(result); // Add the result to list y
}

  console.log(processedMsisdns)
  // output list to output text box
  outputTextarea.value = processedMsisdns.join('\n');

}

function copyToClipboard() {
  // Get the text from the output text box and copy to clipboard
  var outputTextarea = document.getElementById("outputText");
  outputTextarea.select();
  
  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();
}

// export module
module.exports = StandardiseMSISDNs;

function validateAndNavigate() {
  /*
  This function checks the contents of the 2 audit text boxes to ensure neiher are empty
  The function does not check the validity of the text input
  If the text boxes pass the test then the user will navigate to the index page, ese an error will be shown
  */

  // set each text box as a variable
  var auditBtn1 = document.getElementById("tbx_user").value.trim();
  var auditBtn2 = document.getElementById("tbx_task").value.trim();

  // check if either box is empty
  // if test past move to index page else show error
  if (auditBtn1 === "" || auditBtn2 === "") {
    alert("Please fill in both task boxes for audit purposes.");
  } else {
    window.location.href = "index.html";
  }
}

function handleFile() {
  /*
  This function allows a user to select a file and load the data to the input box
  */

  // define variables
  const fileInput = document.createElement('input');

  // set types and format of files to show the user
  fileInput.type = 'file';
  fileInput.accept = '.csv, .txt';
  
  // add listener event to activate when file selected
  fileInput.addEventListener('change', function(event) {
    
    // set variables, file selected by user and output area
    const file = event.target.files[0];
    const outputTextarea = document.getElementById('inputText');

    if (file) {
      // check file
      const reader = new FileReader();
      
      // once file loaded into memory load data into input box
      reader.onload = function(event) {
        outputTextarea.value = event.target.result;
      };

      reader.readAsText(file);
    } else {
      // error no file selected
      alert('Please select a file.');
    }
  });
  
  fileInput.click();
}