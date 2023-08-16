//CHALLANGE1 POLYANETS ... NOT AUTOMATIZATED .. 

const baseUrl = 'https://challenge.crossmint.io/api';
const candidateId = 'b70b2f03-95c8-4950-a6b8-700ece65c45c'; // Replace with your actual candidate ID

// Function to generate a Polyanet
async function generatePolyanet(row, column) {
  const url = `${baseUrl}/polyanets`;
  const data = {
    candidateId,
    row,
    column
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  return result;
}

// The grid pattern as reference
const gridPattern = [
    ["🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🪐","🌌","🌌","🌌","🌌","🌌","🪐","🌌","🌌"],
    ["🌌","🌌","🌌","🪐","🌌","🌌","🌌","🪐","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🪐","🌌","🪐","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🌌","🪐","🌌","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🪐","🌌","🪐","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🪐","🌌","🌌","🌌","🪐","🌌","🌌","🌌"],
    ["🌌","🌌","🪐","🌌","🌌","🌌","🌌","🌌","🪐","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌"],
    ["🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌","🌌"]
  ];
  

  async function postPolyanetsBasedOnPattern() {
    for (let row = 0; row < gridPattern.length; row++) {
        for (let column = 0; column < gridPattern[row].length; column++) {
          if (gridPattern[row][column] === "🪐") {
            await generatePolyanet(row, column);
            console.log("posted");
          }
        }
      }
}



// Call the function to post Polyanets based on the grid pattern
postPolyanetsBasedOnPattern();
