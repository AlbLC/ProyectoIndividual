/**
 * Creamos los endpoints que unen las funciones guardadas en user.controllers junto con las diferentes
 * vistas pug
 */


const router = require("express").Router();
//const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")
const spares = require("../controllers/spares.controllers")


 
//Rutas de inicio

router.post("/registro",user.saveDataForm);
router.post("/login",user.login);
router.get("/tienda",spares.tienda);
router.post("/cuenta",user.cuenta);




module.exports = router;