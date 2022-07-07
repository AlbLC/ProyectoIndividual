const mysql = require("mysql");
const connection = require("../database/sqlDataBase");

const spares = {
tienda: (req, res) => {
    

    let query = 'SELECT * from Repuestos';
    connection.query(query, (err, rows) => {
        if(err) throw err;
        console.log('Datos de tabla1: \n', rows);
        
        
    res.json(rows)
        //connection.end();
    });



    }
}
    module.exports = spares;