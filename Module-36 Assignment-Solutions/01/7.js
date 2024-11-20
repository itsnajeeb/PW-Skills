const http=require('http');

const message="I Am Happy To Learn Full Stack Web Development From PW Skills!";

//create server
const server=http.createServer((req,res)=>{
    //set the HTTP status code and content type
    res.writeHead(200,{'Content-Type': 'text/plain' })
    res.end(message)
})

// Set the port for the server
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});