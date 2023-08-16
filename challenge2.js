//THE CLOSER APROATCHA TO THE CHALLANGE2 
// Function to fetch Polyanet data and convert to JSON
async function fetchPolyanets() {
  const apiUrl = 'https://challenge.crossmint.io/api/polyanets';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const polyanetsData = await response.json();
    return polyanetsData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to create a Soloon
async function createSoloon(row, column, color) {
  const apiUrl = 'https://challenge.crossmint.io/api/soloons';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        row: row,
        column: column,
        color: color,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const soloonData = await response.json();
    return soloonData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to create a comETH
async function createComETH(row, column, direction) {
  const apiUrl = 'https://challenge.crossmint.io/api/comeths';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        row: row,
        column: column,
        direction: direction,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const comETHData = await response.json();
    return comETHData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to fetch map pattern
async function fetchMapPattern() {
  const apiUrl = 'https://challenge.crossmint.io/api/map/b568c02c-4db0-40ee-a198-00df5bbc5141/goal';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const mapPatternData = await response.json();
    return mapPatternData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to print goal array with conditional handling of Soloons
async function printGoalArray() {
  const mapPattern = await fetchMapPattern();
  const goalArray = mapPattern.goal;

  console.log(goalArray);

  for (let row = 0; row < goalArray.length; row++) {
    for (let column = 0; column < goalArray[row].length; column++) {
      if (goalArray[row][column] === 'SPACE') {
        console.log('🌌');
      } else if (goalArray[row][column] === 'POLYANET') {
        await fetchPolyanets(row, column);
        console.log('Posting a 🪐 as POLYANET...');
      } else if (goalArray[row][column].includes('_SOLOON')) {
        const parts = goalArray[row][column].split('_');
        const color = parts[0];
        await createSoloon(row, column, color);
        console.log(`Posting a 🛸 as SOLOONS with color ${color}...`);
      } else if (goalArray[row][column].includes('_COMETH')) {
        const parts = goalArray[row][column].split('_');
        const direction = parts[0];
        await createComETH(row, column, direction);
        console.log(`Posting a ⚙️ as COMETH with direction ${direction}...`);
      } else {
        console.log(goalArray[row][column]);
      }
    }
    console.log('\n'); // Add a newline between rows for better readability
  }
}

// Call the function to print goal array with conditional handling
printGoalArray();



