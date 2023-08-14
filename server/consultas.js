const pool = require("./conexion");
const bcrypt = require("bcryptjs");

const registrarUsuario = async (usuario) => {
  console.log('registrar', usuario)
  let { nombre, email, direccion, password } = usuario;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [nombre, email, direccion, passwordEncriptada];
  const consultas =
    "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4) RETURNING *";
  await pool.query(consultas, values);
};

module.exports = 
    registrarUsuario
