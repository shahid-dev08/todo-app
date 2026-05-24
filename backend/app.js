const API = "http://127.0.0.1:8000";

async function fetchTodos() {
    const res = await fetch(`${API}/todos`);
    const todos = await res.json();
    renderTodos(todos);
}

function renderTodos(todos) {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item" + (todo.completed ? " completed" : "");

        li.innerHTML = `
            <span>${todo.title}</span>
            <div>
                <button onclick="toggleTodo(${todo.id}, ${todo.completed}, '${todo.title}')">
                    ${todo.completed ? "Undo" : "Done"}
                </button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

async function addTodo() {
    const input = document.getElementById("todo-input");
    const title = input.value.trim();

    if (!title) {
        alert("Please enter a todo!");
        return;
    }

    await fetch(`${API}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });

    input.value = "";
    fetchTodos();
}

async function toggleTodo(id, completed, title) {
    await fetch(`${API}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: !completed })
    });

    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${API}/todos/${id}`, {
        method: "DELETE"
    });

    fetchTodos();
}

document.getElementById("add-btn").addEventListener("click", addTodo);

document.getElementById("todo-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTodo();
});

fetchTodos();