 /**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  app.use(bodyParser.json());
  app.use(express.json());
  
  const data = [{
    title: "",
    description: "",
    id: "",
  }];

  const allUsers =[];

  app.get('/todos', (req, res)=>{
    res.status(200).json(allUsers);
  })

  app.get("/todos/:id", (req, res)=>{
    const body = allUsers.find(t=> t.id === parseInt(req.params.id))
    if(!body){
      res.status(404).json({msg: "does not exist"})
    }else{
    res.status(200).json(body);
    }
  })

  app.post("/todos", (req, res)=>{
    try{  
      let number = Math.floor(Math.random()*1000000);
      const todo = {
        title: req.body.title,
        description: req.body.description,
        id: number,
      }
      allUsers.push(todo);
      res.status(201).json(todo);
    }catch{
      res.status(500).json({msg: "error during post request!!"})
    }
  })

  app.put("/todos/:id", (req, res)=>{
    const body = allUsers.findIndex(t=> t.id === parseInt(req.params.id));
    if(body == -1){
      res.status(404).json({msg: "Invalid iD"})
    }else{
      const change = {
        title: req.body.title,
        description: req.body.description,
        id: parseInt(req.params.id)
      } 
      const k = allUsers.findIndex(t=> t.id === parseInt(req.params.id));
      allUsers[k] = change;
      res.status(200).json({msg: "Change completed successfully!!"});
      // res.json(change);
    }
  })

  app.delete("/todos/:id", (req, res)=>{
    const body = allUsers.find(t=> t.id === parseInt(req.params.id));
    if(!body){
      res.status(404).json({msg: "invalid id"})
    }else{
      // let k=0
      // for(let i=0; i<allUsers.length; i++){
      //   if(allUsers.id == parseInt(req.params.id)){
      //     k=i;
      //   }
      // }
      k= allUsers.findIndex(t=> t.id === parseInt(req.params.id))
      allUsers.splice(k, 1);
      res.status(200).json({msg: "File Deleted successfully!!"});
    }
  })

  app.use((err, req, res, next)=>{
    res.status(404).json({msg: "ERROR!!"});
  })

  app.all('*', (req, res)=>{
    res.status(404).send('invalid route')
  })
  app.listen(3001);
  module.exports = app;