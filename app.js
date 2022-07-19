

const express = require("express");
const app = express();

//require("./database/sqlDataBase")
require("./databases/sql")

const router = require("./routes/routes")
const port = 5050;
 

// app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static(__dirname + "/views/css"));
 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log(`Servidor escuchando por el puerto ${port}!`));
