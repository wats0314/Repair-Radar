// Define the cell range you want to fetch
const range = 'A1:D49';
const sheetName = 'Sheet2'; // Replace with your sheet name
const SHEET_ID = '1HwbGp-beLvqEEEVCwOI_TzovZv8YRc5VQQj4fQ8V-vk'; // Replace with your sheet ID
const API_KEY = 'AIzaSyBv0UrkDFK-yPLfcLkEkH3pyu--afLPr_k'; // Replace with your API key

function fetchData() {
  // Construct the URL for fetching the sheet data with the range parameter
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

  // Fetch the sheet data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Define blue1 as the value of the 2nd row in column 4
      const blue1 = data.values[1][3];
      const blue1Item = data.values[1][2];

      // Do something with blue1
      console.log(blue1);
      console.log(blue1Item);
      updateB1Class(blue1, blue1Item);
    })
    .catch(error => {
      console.error(error);
    });
}

setInterval(fetchData, 2000); // Fetch data and console log every 10 seconds

function updateB1Class(blue1, blue1Item) {
    const b1Div = document.getElementById('b1');
    const b1Text = document.getElementById('item-b1');
    
    if (blue1 === '0') {
      b1Div.classList.remove('current');
      b1Div.classList.remove('bench2');
      b1Div.classList.add('bench0');
      b1Div.style.animation = "pop-spin 1.2s forwards";
      b1Text.innerText = blue1Item;
    } else {
      b1Div.classList.remove('bench0');
      b1Div.classList.add('bench2');
      b1Div.style.animation = "";
      b1Text.innerText = "";
    }
}
