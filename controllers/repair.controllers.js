const mysql = require("mysql");
const connection = require("../databases/sqlDataBase");

const sendMail = require("../email")



const repair = {

reparacion: (req, res) => {

    let email = req.body.email;
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let descripcion = req.body.descripcion;



let insertQuery = `INSERT INTO Reparaciones
(
    email, marca, modelo, descripcion
)
VALUES
(
    ?, ?, ?, ?
)`;


   let query = mysql.format(insertQuery, [
     
     email,
     marca,
     modelo,
     descripcion
     
   ]);
   connection.query(query, (err, data) => {
     if (err) throw err;
     console.log(data);
     
   });



   sendMail("Smart Dr.", "SmartDrReparaciones@outlook.com",
    `Petición Servicio ${email} `, `Marca: ${marca} <br> Modelo: ${modelo} <br> Descripcion:${descripcion}`)





   res.json();




},
 


}
module.exports = repair;