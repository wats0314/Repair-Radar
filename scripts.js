const reader = require('g-sheets-api');
const readerOptions = {
  sheetId: '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg',
  returnAllResults: false,
  filter: {
    'key to filter on': 'value to match',
  },
};

reader(readerOptions, (results) => {
  /* Do something amazing with the results */
});