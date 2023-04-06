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
      updateHTMLClassesHorizontal(data);
      updateHTMLClassesVertical(data);
    })
    .catch(error => {
      console.error(error);
    });
}

setInterval(fetchData, 2000); // Fetch data and update HTML every 2 seconds

function updateHTMLClassesHorizontal(data) {
  // Define an array of objects, each containing the ID of the HTML element and its corresponding value in the sheet
  const elementData = [
    { id: 'b1', value: data.values[1][3], item: data.values[1][2] },
    { id: 'b8', value: data.values[8][3], item: data.values[8][2] },

    { id: 'g1', value: data.values[9][3], item: data.values[9][2] },
    { id: 'g8', value: data.values[16][3], item: data.values[16][2] },

    { id: 'p1', value: data.values[17][3], item: data.values[17][2] },
    { id: 'p2', value: data.values[18][3], item: data.values[18][2] },
    { id: 'p3', value: data.values[19][3], item: data.values[19][2] },
    { id: 'p4', value: data.values[20][3], item: data.values[20][2] },
    { id: 'p5', value: data.values[21][3], item: data.values[21][2] },
    { id: 'p6', value: data.values[22][3], item: data.values[22][2] },
    { id: 'p7', value: data.values[23][3], item: data.values[23][2] },
    { id: 'p8', value: data.values[24][3], item: data.values[24][2] },

    { id: 'r1', value: data.values[25][3], item: data.values[25][2] },
    { id: 'r2', value: data.values[26][3], item: data.values[26][2] },
    { id: 'r3', value: data.values[27][3], item: data.values[27][2] },
    { id: 'r4', value: data.values[28][3], item: data.values[28][2] },
    { id: 'r5', value: data.values[29][3], item: data.values[29][2] },
    { id: 'r6', value: data.values[30][3], item: data.values[30][2] },
    { id: 'r7', value: data.values[31][3], item: data.values[31][2] },
    { id: 'r8', value: data.values[32][3], item: data.values[32][2] },

    { id: 'c1', value: data.values[33][3], item: data.values[33][2] },
    { id: 'c2', value: data.values[34][3], item: data.values[34][2] },
    { id: 'c3', value: data.values[35][3], item: data.values[35][2] },
    { id: 'c4', value: data.values[36][3], item: data.values[36][2] },
    { id: 'c5', value: data.values[37][3], item: data.values[37][2] },
    { id: 'c6', value: data.values[38][3], item: data.values[38][2] },
    { id: 'c7', value: data.values[39][3], item: data.values[39][2] },
    { id: 'c8', value: data.values[40][3], item: data.values[40][2] },

    { id: 'y1', value: data.values[41][3], item: data.values[41][2] },
    { id: 'y2', value: data.values[42][3], item: data.values[42][2] },
    { id: 'y3', value: data.values[43][3], item: data.values[43][2] },
    { id: 'y4', value: data.values[44][3], item: data.values[44][2] },
    { id: 'y5', value: data.values[45][3], item: data.values[45][2] },
    { id: 'y6', value: data.values[46][3], item: data.values[46][2] },
    { id: 'y7', value: data.values[47][3], item: data.values[47][2] },
    { id: 'y8', value: data.values[48][3], item: data.values[48][2] }
  ];

  // Loop through the array of objects and modify the class of each HTML element based on its value
  for (let i = 0; i < elementData.length; i++) {
    const element = document.getElementById(elementData[i].id);
    const item = document.getElementById(`item-${elementData[i].id}`);
    const value = elementData[i].value;
    const itemValue = elementData[i].item;
    if (value === '0') {
      element.className = "";;
      element.classList.add('bench0');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else if (value === '1') {
      element.className = "";;
      element.classList.add('bench3');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }  else if (value === '2') {
      element.className = "";;
      element.classList.add('bench4');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }else {
      element.className = "";;
      element.classList.add('bench2');
      item.innerHTML = '';
      element.style.animation = '';
    }
  }
}

function updateHTMLClassesVertical(data) {
  // Define an array of objects, each containing the ID of the HTML element and its corresponding value in the sheet
  const elementData = [

    { id: 'b2', value: data.values[2][3], item: data.values[2][2] },
    { id: 'b3', value: data.values[3][3], item: data.values[3][2] },
    { id: 'b4', value: data.values[4][3], item: data.values[4][2] },
    { id: 'b5', value: data.values[5][3], item: data.values[5][2] },
    { id: 'b6', value: data.values[6][3], item: data.values[6][2] },
    { id: 'b7', value: data.values[7][3], item: data.values[7][2] },



    { id: 'g2', value: data.values[10][3], item: data.values[10][2] },
    { id: 'g3', value: data.values[11][3], item: data.values[11][2] },
    { id: 'g4', value: data.values[12][3], item: data.values[12][2] },
    { id: 'g5', value: data.values[13][3], item: data.values[13][2] },
    { id: 'g6', value: data.values[14][3], item: data.values[14][2] },
    { id: 'g7', value: data.values[15][3], item: data.values[15][2] }


  ];

  // Loop through the array of objects and modify the class of each HTML element based on its value
  for (let i = 0; i < elementData.length; i++) {
    const element = document.getElementById(elementData[i].id);
    const item = document.getElementById(`item-${elementData[i].id}`);
    const value = elementData[i].value;
    const itemValue = elementData[i].item;
    if (value === '0') {
      element.className = "";;
      element.classList.add('bench5');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else if (value === '1') {
      element.className = "";;
      element.classList.add('bench6');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }  else if (value === '2') {
      element.className = "";;
      element.classList.add('bench7');
      item.innerHTML = itemValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }else {
      element.className = "";;
      element.classList.add('bench');
      item.innerHTML = '';
      element.style.animation = '';
    }
  }
}
