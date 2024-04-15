function addTodo() {
    var titleInput = document.getElementById("title");
    var descriptionInput = document.getElementById("description");
    var title = titleInput.value.trim();
    var description = descriptionInput.value.trim();

    if (title === "" || description === "") {
        alert("Please enter both title and description.");
        return;
    }

    var todoList = document.getElementById("todoList");
    var todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = "<h3>" + title + "</h3><p>" + description + "</p>";
    todoList.appendChild(todoItem);

    // Clear input fields after adding todo
    titleInput.value = "";
    descriptionInput.value = "";
}