function StandardiseMSISDNs(inputMSISDN) {

  var inputMsisdns = document.getElementById("inputText").value.trim();
  console.log(inputMsisdns)
  const outputTextarea = document.getElementById('outputText');
  const lines = outputTextarea.split('\n');

  outputTextarea.value = lines.join('\n');
  // if (typeof inputMSISDN === 'string')
  //   {return inputMSISDN}
  // else
  //   {throw new Error('test');}
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

module.exports = StandardiseMSISDNs;