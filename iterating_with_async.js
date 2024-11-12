// Utility function to create a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to iterate with a delay
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    console.log(value);
    await delay(1000); // Delay of 1 second
  }
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
