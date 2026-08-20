const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: 101, name: "John", age: 30, email: "john@example.com" },
    { id: 102, name: "Jane", age: 25, email: "jane@example.com" },
    { id: 103, name: "Bob", age: 35, email: "bob@example.com" },
    { id: 104, name: "Alice", age: 28, email: "alice@example.com" }
];

app.get("/", (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get("/about", (req, res) => {
    res.send('<h1>About Us</h1>');
});
 
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});