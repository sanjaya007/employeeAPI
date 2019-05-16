const Express = require('express');

const app = Express();
const port = 3000;

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//require handlers
const handlers = require("./handlers");

//handlers
app.get("/app/employee",handlers.getEmployees)
app.post("/app/employee",handlers.insertEmployees)
app.put("/app/employee",handlers.updateEmployees)
app.delete("/app/employee",handlers.deleteEmployees)

//start server
//long running proceess
app.listen(port, function(){
    console.log("Listening on "+port +"!")
})