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
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { log } = require("console");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const path = "./todos.json"

app.get("/todos", (req, res) => {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    // console.log(data);
    if (err) {
      console.log(err);
      return;
    }
    data = JSON.parse(data);
    console.log("ok: ", data[5].completed);
    res.status(200).json(data);
  });
  // res.send('hello there')
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let id = parseInt(req.params.id);
    console.log(id);
    let todos = JSON.parse(data);
    console.log(todos);
    let reponseTodo;
    todos.forEach((todo) => {
      if (todo.id === id) {
        res.status(200).json({ todo });
        return;
      }
    });
    res.status(404).json({ msg: "todo not found" });
  });
});

app.post("/todos", (req, res) => {
  let todo = req.body;
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    let todos = JSON.parse(data);
    todo.id = todos.length + 1;
    todo.completed === "false"
      ? (todo.completed = false)
      : (todo.completed = true);
    todos.push(todo);
    let newTodos = JSON.stringify(todos);
    fs.writeFile("./todos.json", newTodos, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(201).json({ id: todo.id });
    });
  });
});

app.put("/todos/:id", (req, res) => {
  let newTodo = req.body;
  let changed = false;
  newTodo.completed === "false"
    ? (newTodo.completed = false)
    : (newTodo.completed = true);
  let id = parseInt(req.params.id);
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    todos.forEach((todo) => {
      if (todo.id === id) {
        changed = true;
        todo.title = newTodo.title;
        todo.completed = newTodo.completed;
        todo.description = newTodo.description;
      }
    });
    if (changed) {
      let patchedTodos = JSON.stringify(todos);
        fs.writeFile("./todos.json", patchedTodos, (err) => {
          if (err) console.log(err);
          console.log("second");
          res.status(200).json({ id: id });
          return;
        });
    }else{
      res.status(404).json({ msg: "todo not found" })
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  let id = parseInt(req.params.id);
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let newTodos = todos.filter((todo) => {
      if (todo.id === id) changed = true
      return todo.id !== id;
    });
    if (changed) {
      newTodos = JSON.stringify(newTodos)
      fs.writeFile("./todos.json", newTodos, (err) => {
        if (err) console.log(err);
        console.log("second");
        res.status(200).json({ id: id });
        return;
      });
    }else{
      res.status(404).json({ msg: "todo not found" });
    }
    
    
  });
});

// app.listen(3000, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("server started on port 3000");
// });

module.exports = app;
