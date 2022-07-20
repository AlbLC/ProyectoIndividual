const mysql = require("mysql");


const mydb = "individualRelaciona";
const connection = require("../databases/sqlDataBase");
const jwt = require("jsonwebtoken");
const sendMail = require("../email")


const SECRET = "asereje";

const passRecovery = {

  confirmedUser: async (req, res, next) => {
    let emailUser = req.body.email; 
    console.log(emailUser)
    let nameCorrect = `SELECT email FROM usuarios where email = '${emailUser}'`;


    connection.query(nameCorrect, (err, rows) => {
      if (err) throw err;

      console.log('usuarios: \n', rows);
      console.log(rows);

      if (rows != null) {


        const payload = {
          email: emailUser,


        };
        const token = jwt.sign(payload, SECRET, { expiresIn: "15m" });

        const link = `<a href="http://localhost:5050/recovery/${emailUser}/${token}">Cambiar contraseña</a>`;
        console.log(link);
        sendMail("alblc4185@gmail.com", `${emailUser}`, "Recuperación de contraseña", `${link}`)
      } else {
        alert('El usuario no existe');
      }



    });



  },




  checkUserPost: async (req, res) => {

    const { pass } = req.body;
    const email = req.params.email
    MongoClient.connect(url, function(err,db){
      
      var dbo = db.db(mydb);
     
        dbo.collection("Usuarios").findOneAndUpdate({email: email}, {$set: {pass: pass}}, {upsert: true}, function(err,doc) {
          if (err) { throw err; }
          else { console.log("Updated"); } 
        });  
      
    });


  },

  confirmUserGet: async (req, res) => {
    const { token } = req.params;

    try {
      jwt.verify(token, SECRET);

      res.render("confirmed-user");
    } catch (error) {
      res.send("No se puede confirmar el usuario, token inválido");
    }
  },





}

module.exports = passRecovery;

