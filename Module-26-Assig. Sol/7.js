//Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.t ypicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returnsa to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

async function fetchCombinedData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);

        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error("Failed to fetch one or more resources");
        }

        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        const combinedData = {
            todo: todoData,
            post: postData
        };

        console.log(combinedData);
    } catch (error) {
        console.error("Error fetching combined data:", error);
    }
}

fetchCombinedData();
