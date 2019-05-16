const knex = require("./knexFile");

knex.schema.hasTable('employees').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('employees', function(table) {
            table.increments('id').primary()
            table.string('name')
            table.integer('age')
            table.float('salary')
        });
    }else{
        console.log("Table already exists");
    }
});