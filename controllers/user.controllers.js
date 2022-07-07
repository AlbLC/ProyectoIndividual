

/**
 * Llamamos a las librerias de mongoose y sql
 */
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const UserModel = require("../models/userModels");

const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const { propfind } = require("moongose/routes");
const bcrypt = require("bcrypt");
let userId









const user = {
  saveDataForm: (req, res) => {
    console.log(req.body);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let telefono = req.body.telefono;
    let dni = req.body.dni;
    let direccion = req.body.direccion;
    const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
    const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const telfExp = new RegExp(/^\d{9}$/);
    const dniExp = new RegExp(/^\d{8}[a-zA-Z]$/);
    const passExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    );
    const direccionExp = new RegExp(/^[#.0-9a-zA-Z\s,-]+$/);
      



    if (
      

      !emailExp.test(email) ||
      !nameExp.test(nombre) ||
      !unNameExp.test(apellido) ||
      !dniExp.test(dni) ||
      !passExp.test(contrasena) ||
      !telfExp.test(telefono) || 
      !direccionExp.test(direccion)
      
     ) {
      console.log("campos incorrectos"); //renderizar una pagina de campos incorrectos
    } else {


      bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
        if (err) {
          console.log("Error hasheando:", err);
        } else {
          console.log("Y hasheada es: " + palabraSecretaEncriptada);
          palabraEncriptada = palabraSecretaEncriptada;
          let insertQuery = `INSERT INTO Usuarios
       (
           nombre, apellido, dni ,email, direccion, telefono, contrasena
       )
       VALUES
       (
           ?, ?, ?, ?, ?, ?, ?
       )`;


          let query = mysql.format(insertQuery, [
            nombre,
            apellido,
            dni,
            email,
            direccion,
            telefono,
            palabraEncriptada
          ]);
          connection.query(query, (err, data) => {
            if (err) throw err;
            console.log(data);
          });
        }
        res.send("Registro completado");
      });
      //  let obj = { dni: req.body.dni }

      //   res.render("index", {
      //     dni: [obj]
      //     // usuarioRegistrado: "Usuario registrado correctamente",
      // })


    }
  },
  login: (req, res) => {



    loginEmail = req.body.email;
    passLog = req.body.contrasena;
    var userId;



    
        
      let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;

      
        connection.query(nameCorrect, (err, rows) => {
          if (err) throw err;
    
          console.log('Usuario: \n', rows);
          if (rows.length > 0) {
          bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {
            // result == true
            
            if (result && rows[0].email == loginEmail) {
              console.log("Usuario correcto");
              console.log(result)
            //   let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";
              
            //   let query3 = mysql.format(selectQuery, [
            //     "Usuarios",
            //     "email",
            //     loginEmail,
            //   ]);
            //   console.log("selectQuery" + selectQuery);
            //   console.log("query3" + query3);
            //  // res.send("Usuario y contraseña correcta")
                 res.json({status: true})
            //   connection.query(query3, (err, data) => {
            //     if (err) throw err;
            //     // console.log(data);
            //     var userId = data[0].id
            //     logNombre = data[0].nombre;
            //     logApellido = data[0].apellido;
            //     logDni = data[0].dni;
            //     logEmail = data[0].email;
            //     logTelefono = data[0].telefono;
            //     logDireccion = data[0].direccion;
            //     console.log(userId)
            //   });
            } else{
              //res.send("email incorrecto")
              res.json({status: false})
            
          }
        });
      }else{
        
        res.json({status: false})
      }
      })
    
    

}


}



module.exports = user;

