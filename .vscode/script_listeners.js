
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
  