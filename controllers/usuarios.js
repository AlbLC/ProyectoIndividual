

/**
 * Llamamos a las librerias de mongoose y sql
 */


const Usuario = require('../models/Usuario');
const connection = require("../databases/sql");

// const connection = require("../databases/sqlDataBase");
const mysql = require("mysql");
const { Sequelize, Op } = require("sequelize");


const { encrypt, compare } = require('../helpers/handleBcrypt');









const usuarios = {
  registro: async (req, res) => {
    try{
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let telefono = req.body.telefono;
    let dni = req.body.dni;
    let direccion = req.body.direccion;

    
      const passwordHash = await encrypt(contrasena);

      const usuarioComprobacion = await Usuario.findOne({
        where: { email: email },
      });
      
      if (!usuarioComprobacion) {

        if (
          nombre.match(/^([A-Za-z]{1,15})$/) &&
          apellido.match(/^([A-Za-z]{1,15})$/) &&
          email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/) &&
          contrasena.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/) &&
          telefono.match(/^\d{9}$/) &&
          dni.match(/^\d{8}[a-zA-Z]$/) &&
          direccion.match(/^[#.0-9a-zA-Z\s,-]+$/)
        ) {
          const usuario = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: passwordHash,
            telefono: telefono,
            dni: dni,
            direccion: direccion,
          });
          res.json({
            usuario: email,
          });
        }else{
          res.json({
            message: "Datos invalidos",
          });
          //res.send("Datos invalidos");
        }
       
      } else {
        res.json({
          message: "El usuario existe",
        });
        //res.send("El usuario existe");
      }
    } catch (error) {
      console.error(error);
      res.send("Error");
    }
  },
  login: async (req, res) => {

try{

    loginEmail = req.body.email;
    passLog = req.body.contrasena;
    
   
    const usuario = await Usuario.findOne({
      where: { email: loginEmail },

    });
console.log(usuario);

    if (!usuario) {

      //res.send("El usuario no existe");
      res.json({
        message: "El usuario no existe",
      });
    }
    const checkPassword = await compare( passLog, usuario.contrasena);

    if (checkPassword) {

      res.json({
        message: true,
        loginEmail: usuario.email,
       

        //nombre: usuario.nombre,
        //apellido: usuario.apellido,
        //rol: usuario.rol  
      })
    
    } else {
      //res.send("Contraseña erronea");
      res.json({
        message: "Contraseña erronea",
      });
    }
  } catch (error) {
    console.error(error);
    res.send(error);
  }
},
      
cuenta: async (req, res) => {

  try{
  loginEmail = req.body.email;

  const usuario = await Usuario.findOne({
    where: { email: loginEmail },

  });
console.log(usuario)
  res.json({usuario})

}catch (error) {
  console.error(error);
  res.send(error);
}


},

}



module.exports = usuarios;

