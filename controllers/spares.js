const Repuestos = require("../models/Repuestos");
const connection = require("../databases/sql");
const mysql = require("mysql");
const { Sequelize, Op } = require("sequelize");

const repuestos = {

    tienda: async (req, res) => {
        try{
        
            const repuestos = await Repuestos.findAll();


            console.log(repuestos);
            res.json(repuestos);
            

        }catch(error){
            console.log(error);
        }
    }
}

module.exports = repuestos;