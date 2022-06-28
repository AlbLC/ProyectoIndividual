/**
 * Creamos los endpoints que unen las funciones guardadas en user.controllers junto con las diferentes
 * vistas pug
 */


const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")



 
//Rutas de inicio

router.post("/registro",user.saveDataForm);
router.post("/login",user.login);




module.exports = router;