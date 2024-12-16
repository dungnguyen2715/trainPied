//use expressJS to create server instead of http
const express = require("express")
//create server with expressJS
const app = express();//run express
const PORT = 4000;

//route
app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/hi", (req, res) => {
    res.send("Hi everybody")
})

app.listen(PORT, () => {
    console.log("server are running on server porttt " + PORT);
})