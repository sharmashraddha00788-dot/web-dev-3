const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

app.use(morgan()) // third party middleware for logging requests

// const logMiddleware = (req, res, next) => {
//     console.log('req.name:', req.name);
//     req.name = 'John Doe';
//     console.log(`${req.method} ${req.url}`);
//     console.log("Time:", new Date().toLocaleString());
//     res.send("Hello from middleware");
//     next();
// }

const apiCheckMiddleware = (req, res, next) => {
    if(req.query.API_KEY==="1234") {
        console.log("Authenticated")
        next();
    } else {
        res.send("API invalid");
    }
}

// app.use(logMiddleware);
app.use(apiCheckMiddleware);

app.get('/', (req, res) => {
    console.log('request name:', req.name);
    console.log("hello,world");
    res.send('Hello, World!');
});

app.get('/data', (req, res) => {
    console.log('request name:', req.name);
    console.log("Time:", new Date().toLocaleString());
    // res.send('Data from the API');
    res.json({
        city: 'New York',
        country: 'USA',
        temp: 32
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});