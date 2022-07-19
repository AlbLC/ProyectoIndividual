/**
 * Creamos los endpoints que unen las funciones guardadas en user.controllers junto con las diferentes
 * vistas pug
 */


const router = require("express").Router();
//const pages = require("../controllers/pages.controllers")

// const spares = require("../controllers/spares.controllers")
const repair = require("../controllers/repair.controllers")
const passRecovery = require("../controllers/recuperacion.controllers") 
const usuarios = require("../controllers/usuarios")
const repuestos = require("../controllers/spares")
const {registro, login, cuenta} = usuarios;



 
//Rutas de inicio

router.post("/registro", registro);
router.post("/login", login);
// router.get("/tienda",spares.tienda);
router.get("/tienda",repuestos.tienda);
router.post("/cuenta", cuenta);
router.post("/reparacion",repair.reparacion);
router.post("/recovery", passRecovery.confirmedUser);
router.get("/recovery/:email/:token", passRecovery.confirmUserGet);
router.post("/recovery/:email/:token", passRecovery.checkUserPost);



module.exports = router;