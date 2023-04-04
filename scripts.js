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
      updateHTMLClasses(data);
    })
    .catch(error => {
      console.error(error);
    });
}

setInterval(fetchData, 2000); // Fetch data and update HTML every 2 seconds

function updateHTMLClasses(data) {
  // Define an array of objects, each containing the ID of the HTML element and its corresponding value in the sheet
  const elementData = [
    { id: 'c1', value: data.values[34][3], item: data.values[34][2] },
    { id: 'c2', value: data.values[35][3], item: data.values[35][2] },
    { id: 'c3', value: data.values[36][3], item: data.values[36][2] },
    { id: 'c4', value: data.values[37][3], item: data.values[37][2] },
    { id: 'c5', value: data.values[38][3], item: data.values[38][2] },
    { id: 'c6', value: data.values[39][3], item: data.values[39][2] },
    { id: 'c7', value: data.values[40][3], item: data.values[40][2] },
    { id: 'c8', value: data.values[41][3], item: data.values[41][2] }
    
  ];

  // Loop through the array of objects and modify the class of each HTML element based on its value
  for (let i = 0; i < elementData.length; i++) {
    const element = document.getElementById(elementData[i].id);
    const item = document.getElementById(`item-${elementData[i].id}`);
    const value = elementData[i].value;
    const itemValue = elementData[i].item;
    if (value === '0') {
      element.classList.remove('bench2');
      element.classList.add('bench0');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else {
      element.classList.remove('bench0');
      element.classList.add('bench2');
      item.innerHTML = '';
      element.style.animation = '';
    }
  }
}
