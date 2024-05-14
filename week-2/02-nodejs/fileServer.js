/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3001;

async function readDirectory() {
  return new Promise((resolve, reject) => {
    fs.readdir("./files/", "utf-8", (err, data) => {
      if (err) {
        console.log("there is a error reading files " + err);
        reject(err);
      }
      resolve(data);
    });
  });
}

app.get("/files", async (req, res) => {
  try{
  const files = await readDirectory();
  const listOfFileNames = files.map((file) => path.basename(file));
  res.json(listOfFileNames);
  } catch(err){
    res.status(500).send("Internal Server Error");
  }
  
});

app.get("/file/:filename", async (req, res) => {
  try {
    const filePath = path.join("./files", req.params.filename);
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          return res.status(404).send('File not found');
        }
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});
app.listen(port, (req, res) => {
  console.log(`file server is running in port ${port}`);
});
module.exports = app;
