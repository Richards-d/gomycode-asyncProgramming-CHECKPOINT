// Simulated API call function
function fakeApiCall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Data fetched successfully!" });
      }, 2000); // Simulate a 2-second API response delay
    });
  }
  
  // Async function to await the API call
  async function awaitCall() {
    try {
      console.log("Fetching data...");
      const data = await fakeApiCall(); // Wait for the API response
      console.log("Data received:", data); // Log the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Example usage
  awaitCall();
  