//Write a function that asynchronously fetches data from an API [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchData() {
    try {
        // Fetch data from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
