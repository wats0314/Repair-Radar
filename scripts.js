// Define the cell range you want to fetch
const range = 'A1:E51';
const sheetName = 'Sheet3'; // Replace with your sheet name
const SHEET_ID = '1HwbGp-beLvqEEEVCwOI_TzovZv8YRc5VQQj4fQ8V-vk'; // Replace with your sheet ID
const API_KEY = 'AIzaSyBv0UrkDFK-yPLfcLkEkH3pyu--afLPr_k'; // Replace with your API key
let Refreshing;
let totalR2QA;

function fetchData() {
  // Construct the URL for fetching the sheet data with the range parameter
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

  // Fetch the sheet data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      updateHTMLClassesHorizontal(data);
      updateHTMLClassesVertical(data);
      console.log(data.values[19][3]);
      Refreshing = (data.values[49][3]);
      totalR2QA = (data.values[50][3]);
      console.log(Refreshing);
      document.getElementById('R2QA-total').textContent = 'R2QA: ' + totalR2QA;
    })
    .catch(error => {
      console.error(error);
    });
}

setInterval(fetchData, 2000); // Fetch data and update HTML every 2 seconds

function updateHTMLClassesHorizontal(data) {
  // Define an array of objects, each containing the ID of the HTML element and its corresponding value in the sheet
  const elementData = [


    { id: 'p2', value: data.values[18][3], item: data.values[18][2], eValue: data.values[18][4] },
    { id: 'p3', value: data.values[19][3], item: data.values[19][2], eValue: data.values[19][4] },
    { id: 'p4', value: data.values[20][3], item: data.values[20][2], eValue: data.values[20][4] },
    { id: 'p5', value: data.values[21][3], item: data.values[21][2], eValue: data.values[21][4] },
    { id: 'p6', value: data.values[22][3], item: data.values[22][2], eValue: data.values[22][4] },
    { id: 'p7', value: data.values[23][3], item: data.values[23][2], eValue: data.values[23][4] },


    { id: 'r2', value: data.values[26][3], item: data.values[26][2], eValue: data.values[26][4] },
    { id: 'r3', value: data.values[27][3], item: data.values[27][2], eValue: data.values[27][4] },
    { id: 'r4', value: data.values[28][3], item: data.values[28][2], eValue: data.values[28][4] },
    { id: 'r5', value: data.values[29][3], item: data.values[29][2], eValue: data.values[29][4] },
    { id: 'r6', value: data.values[30][3], item: data.values[30][2], eValue: data.values[30][4] },
    { id: 'r7', value: data.values[31][3], item: data.values[31][2], eValue: data.values[31][4] },



    { id: 'c2', value: data.values[34][3], item: data.values[34][2], eValue: data.values[34][4] },
    { id: 'c3', value: data.values[35][3], item: data.values[35][2], eValue: data.values[35][4] },
    { id: 'c4', value: data.values[36][3], item: data.values[36][2], eValue: data.values[36][4] },
    { id: 'c5', value: data.values[37][3], item: data.values[37][2], eValue: data.values[37][4] },
    { id: 'c6', value: data.values[38][3], item: data.values[38][2], eValue: data.values[38][4] },
    { id: 'c7', value: data.values[39][3], item: data.values[39][2], eValue: data.values[39][4] },



    { id: 'y2', value: data.values[42][3], item: data.values[42][2], eValue: data.values[42][4] },
    { id: 'y3', value: data.values[43][3], item: data.values[43][2], eValue: data.values[43][4] },
    { id: 'y4', value: data.values[44][3], item: data.values[44][2], eValue: data.values[44][4] },
    { id: 'y5', value: data.values[45][3], item: data.values[45][2], eValue: data.values[45][4] },
    { id: 'y6', value: data.values[46][3], item: data.values[46][2], eValue: data.values[46][4] },
    { id: 'y7', value: data.values[47][3], item: data.values[47][2], eValue: data.values[47][4] }

  ];

  // Loop through the array of objects and modify the class of each HTML element based on its value
  for (let i = 0; i < elementData.length; i++) {
    const element = document.getElementById(elementData[i].id);
    const item = document.getElementById(`item-${elementData[i].id}`);
    const sidValue = document.getElementById(`r2r-${elementData[i].id}`);
    const stopwatch = document.getElementById(`r2qa-${elementData[i].id}`);
    const value = elementData[i].value;
    const itemValue = elementData[i].item;
    const eValue = elementData[i].eValue;
    if (value === '0') {
      element.className = "";;
      element.classList.add('bench0');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'flash-light-red-to-red 3.5s ease-in-out infinite, pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else if (value === '1') {
      element.className = "";;
      element.classList.add('bench3');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }  else if (value === '2') {
      element.className = "";;
      element.classList.add('bench4');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }else {
      element.className = "";;
      element.classList.add('bench2');
      item.innerHTML = '';
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = '';
    }
  }
}

function updateHTMLClassesVertical(data) {
  // Define an array of objects, each containing the ID of the HTML element and its corresponding value in the sheet
  const elementData = [
    { id: 'b2', value: data.values[2][3], item: data.values[2][2], eValue: data.values[2][4] },
    { id: 'b3', value: data.values[3][3], item: data.values[3][2], eValue: data.values[3][4] },
    { id: 'b4', value: data.values[4][3], item: data.values[4][2], eValue: data.values[4][4] },
    { id: 'b5', value: data.values[5][3], item: data.values[5][2], eValue: data.values[5][4] },
    { id: 'b6', value: data.values[6][3], item: data.values[6][2], eValue: data.values[6][4] },
    { id: 'b7', value: data.values[7][3], item: data.values[7][2], eValue: data.values[7][4] },
    { id: 'g2', value: data.values[10][3], item: data.values[10][2], eValue: data.values[10][4] },
    { id: 'g3', value: data.values[11][3], item: data.values[11][2], eValue: data.values[11][4] },
    { id: 'g4', value: data.values[12][3], item: data.values[12][2], eValue: data.values[12][4] },
    { id: 'g5', value: data.values[13][3], item: data.values[13][2], eValue: data.values[13][4] },
    { id: 'g6', value: data.values[14][3], item: data.values[14][2], eValue: data.values[14][4] },
    { id: 'g7', value: data.values[15][3], item: data.values[15][2], eValue: data.values[15][4] }
  ];

  // Loop through the array of objects and modify the class of each HTML element based on its value
  for (let i = 0; i < elementData.length; i++) {
    const element = document.getElementById(elementData[i].id);
    const item = document.getElementById(`item-${elementData[i].id}`);
    const sidValue = document.getElementById(`r2r-${elementData[i].id}`);
    const value = elementData[i].value;
    const itemValue = elementData[i].item;
    const eValue = elementData[i].eValue;

    // Get the corresponding value from column E
    const columnEValue = data.values[i][4];

    if (value === '0') {
      element.className = '';
      element.classList.add('bench5');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'flash-light-red-to-red 3.5s ease-in-out infinite, pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else if (value === '1') {
      element.className = '';
      element.classList.add('bench6');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    }  else if (value === '2') {
      element.className = '';
      element.classList.add('bench7');
      item.innerHTML = itemValue;
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = 'pop 0.7s ease-in-out forwards, shake 0.7s ease-in-out 0.7s infinite';
    } else {
      element.className = '';
      element.classList.add('bench');
      item.innerHTML = '';
      sidValue.innerHTML = 'SID ' + eValue;
      element.style.animation = '';
    }

    // Write the corresponding value from column E to

  }
}


function addStopwatchToBench0() {
  const stopwatchDivs = document.querySelectorAll('.stopwatch');
  stopwatchDivs.forEach((stopwatchDiv) => {
    const parentDiv = stopwatchDiv.parentNode;
    if (parentDiv.className !== 'bench0' && Refreshing !== 'yes') {
      clearInterval(stopwatchDiv.dataset.intervalId);
      parentDiv.removeChild(stopwatchDiv);
    }
  });

  const bench0Divs = document.querySelectorAll('.bench0');
  bench0Divs.forEach((parentDiv) => {
    const parentDivId = parentDiv.getAttribute('id');
    const stopwatchDiv = parentDiv.querySelector(`#${parentDivId}-timer`);
    if (!stopwatchDiv) {
      const newStopwatchDiv = document.createElement('div');
      newStopwatchDiv.setAttribute('id', `${parentDivId}-timer`);
      newStopwatchDiv.setAttribute('class', 'stopwatch');
      parentDiv.appendChild(newStopwatchDiv);
      let startTime = null;
      let elapsedTime = 0;
      const stopwatchInterval = setInterval(() => {
        if (startTime === null) {
          startTime = Date.now();
        } else {
          elapsedTime = Date.now() - startTime;
          newStopwatchDiv.textContent = (elapsedTime / 1000).toFixed(0) + 's';
        }
      }, 10);
      newStopwatchDiv.dataset.intervalId = stopwatchInterval;
    }
  });
}


setInterval(addStopwatchToBench0, 1000);

function addStopwatchToBench5() {
  const stopwatchDivs = document.querySelectorAll('.stopwatch2');
  stopwatchDivs.forEach((stopwatchDiv) => {
    const parentDiv = stopwatchDiv.parentNode;
    if (parentDiv.className !== 'bench5' && Refreshing !== 'yes') {
      clearInterval(stopwatchDiv.dataset.intervalId);
      parentDiv.removeChild(stopwatchDiv);
    }
  });

  const bench5Divs = document.querySelectorAll('.bench5');
  bench5Divs.forEach((parentDiv) => {
    const parentDivId = parentDiv.getAttribute('id');
    const stopwatchDiv = parentDiv.querySelector(`#${parentDivId}-timer`);
    if (!stopwatchDiv) {
      const newStopwatchDiv = document.createElement('div');
      newStopwatchDiv.setAttribute('id', `${parentDivId}-timer`);
      newStopwatchDiv.setAttribute('class', 'stopwatch2');
      parentDiv.appendChild(newStopwatchDiv);
      let startTime = null;
      let elapsedTime = 0;
      const stopwatchInterval = setInterval(() => {
        if (startTime === null) {
          startTime = Date.now();
        } else {
          elapsedTime = Date.now() - startTime;
          newStopwatchDiv.textContent = (elapsedTime / 1000).toFixed(0) + 's';
        }
      }, 10);
      newStopwatchDiv.dataset.intervalId = stopwatchInterval;
    }
  });
}

setInterval(addStopwatchToBench5, 1000);
