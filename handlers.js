const knex = require("./knexFile");

function getEmployees(req,res){
    
    knex
    .select()
    .table('employees')
    .then((data)=>{
        res.send(data);
    })
}

function insertEmployees(req,res){
    var values = {
        name: req.query.name,
        age: req.query.age,
        salary: req.query.salary
    };
    knex('employees')
    .insert(values)
    .then(
        ()=>{
            console.log("1 row inserted!")
            res.end("1 row inserted!")
        }
    )
}

function updateEmployees(req,res){
    var updateValues = {
        name: req.query.name,
        age: req.query.age,
        salary: req.query.salary
    },
    id = req.query.id;

    knex('employees')
    .where({ id: id })
    .update(updateValues)
    .then(
        ()=>{
            console.log("1 row updated!")
        }
    )
}

function deleteEmployees(req,res){
    var id = req.query.id;
    knex('employees')
    .where({ id: id })
    .del()
    .then(
        ()=>{
            console.log("1 row deleted!")
        }
    )
}

module.exports = {
    getEmployees : getEmployees,
    insertEmployees : insertEmployees,
    updateEmployees : updateEmployees,
    deleteEmployees : deleteEmployees,
};