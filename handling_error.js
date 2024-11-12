// Simulated API call function with error handling
function fakeApiCall(shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject("API request failed"); // Simulate an error
        } else {
          resolve({ message: "Data fetched successfully!" });
        }
      }, 2000); // Simulate a 2-second API response delay
    });
  }
  
  // Async function to await the API call with error handling
  async function awaitCall() {
    try {
      console.log("Fetching data...");
      const data = await fakeApiCall(true); // Pass true to simulate a failure
      console.log("Data received:", data);
    } catch (error) {
      console.error("Error fetching data: Unable to retrieve information. Please try again later.");
    }
  }
  
  // Test the function
  awaitCall();
  