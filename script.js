function StandardiseMSISDNs(inputMSISDN) {
  console.log("StdMsisdns is processing:" + inputMSISDN)

  if (typeof inputMSISDN === 'string') 
    {var processingMsisdn = inputMSISDN.replace(/^0{3}|^0{2}/, '0')}
  else
    {throw new Error('input is not a string');}  

  if (inputMSISDN.length === 10 && inputMSISDN.startsWith('7'))
    {console.log("adding leading zero")
      processingMsisdn = '0' + inputMSISDN}

  if (processingMsisdn.length <= 7)
    {return (inputMSISDN + ' is not a valid msisdn (Reason: short length')}
  else if (processingMsisdn.length >= 14)
    {return (inputMSISDN + ' is not a valid msisdn (Reason: long length')}
  else {
    if (processingMsisdn.length === 11 && processingMsisdn.startsWith('07'))
    {console.log("adding uk suffix")
    processingMsisdn = '+44' + processingMsisdn.substring(1);}
    else{
      console.log("adding non uk suffix")
      processingMsisdn = '+' + processingMsisdn;
    }
  }

  return processingMsisdn
}

function processMSISDNS() {

  var inputMsisdns = document.getElementById("inputText").value.trim();
  var processedMsisdns = [];
  const outputTextarea = document.getElementById('outputText');
  const msisdnList = inputMsisdns.split('\n');

  console.log('Captured input list: ' + inputMsisdns)
  console.log('split input list: ' + msisdnList)

// Loop through each item in list x, pass it to function p, and add the output to list y
for (var i = 0; i < msisdnList.length; i++) {
  console.log('Processing a value (' + i + '): ' + msisdnList[i])
    var result = StandardiseMSISDNs(msisdnList[i]); // Call function p with the current item
  console.log('Processed to: ' + result)
    processedMsisdns.push(result); // Add the result to list y
}

  console.log(processedMsisdns)
  outputTextarea.value = processedMsisdns.join('\n');

}

function copyToClipboard() {
  // Get the text from the textbox
  var outputTextarea = document.getElementById("outputText");
  outputTextarea.select();
  
  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();
}

module.exports = StandardiseMSISDNs;

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

function handleFile() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.csv';
  
  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const outputTextarea = document.getElementById('inputText');

    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const content = event.target.result;
        const lines = content.split('\n');
        outputTextarea.value = lines.join('\n');
      };

      reader.readAsText(file);
    } else {
      alert('Please select a file.');
    }
  });
  
  fileInput.click();
}