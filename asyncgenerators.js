async function* fetchUserPages() {
    let page = 1;
    while (page <= 3) {  // Simulate fetching 3 pages
      console.log(`Fetching page ${page}...`);
      
      // Simulating an API request that returns users for the current page
      const users = await new Promise(resolve => {
        setTimeout(() => {
          resolve([`User ${page * 1}`, `User ${page * 2}`, `User ${page * 3}`]);
        }, 1000); // Simulating 1 second delay for each page
      });
  
      yield users;  // Yield the users from the current page
      page++;  // Move to the next page
    }
  }

  (async () => {
    const userGenerator = fetchUserPages();  // Create an instance of the generator
    
    for await (const users of userGenerator) {
      console.log("Received Users:", users);  // Log the users fetched on each page
    }
  
    console.log("All pages fetched!");
  })();
  