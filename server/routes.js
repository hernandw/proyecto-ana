const express = require("express");


const router = express.Router();

const  registrarUsuario  = require("./consultas");

router.get("/", (req, res) => {
  res.send("Servidor en express");
});

router.post('/user', async (req, res) => {
try {
    res.send("Usuario creado con exito");
} catch (error) {
    res.status(500).send(error.message);
}
    

})

router.post("/usuarios", async (req, res) => {
  try {
    const  usuario  = req.body;
      console.log('usuario es: ', usuario)
     await registrarUsuario(usuario);
      
    res.send("Usuario creado con exito");
  } catch (error) {
    res.status(500).send(error.message);
  }
});



module.exports = router;
