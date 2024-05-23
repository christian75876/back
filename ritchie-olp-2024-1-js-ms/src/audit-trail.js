const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'auditTrail.json');
console.log("audit-trail funcionando");

/*
version12 finalmente funcional pero con error

const registrarInicioSesion = async (fecha, email) => {
  const nuevoRegistro = {
    "fecha": fecha,
    "email": email,
    tipo: 'login',
  };
  
  fs.appendFile(filePath, JSON.stringify(nuevoRegistro), (error) => {
        if (error) {
            console.log("Error al agregar");
            throw new error("Error inesperado", error);
        } else {
            console.log("Se agrego correctamente");
        }
    })
};
*/

//instanciado en la linea 56 de authControoller.js como auditTrail.registrarInicioSesion(new Date(), email);
const registrarInicioSesion = async (fecha, email) => {
    const nuevoRegistro = {
        fecha: fecha,
        email: email,
        tipo: 'login',
    };

    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(nuevoRegistro);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
    console.log("Se agrego correctamente");
};

const registrarCierreSesion = async (email) => { //no encuentro donde meter esto, no hay cierre de sesion como tal
  const nuevoRegistro = {
    email: email,
    tipo: 'logout',
    fecha: new Date().toISOString(),
  };
    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(nuevoRegistro);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 2) + '\n');
    console.log("Se agrego correctamente");
};

const usuarioCreado = async (fecha, email, newUser, newEmail) => {
  const nuevoRegistro = {
    fecha: fecha,
    email: email,
    tipo: 'UsuarioCreado',
    newUser: newUser,
    newEmail: newEmail,
  };

  const data = await fs.promises.readFile(filePath, 'utf-8');
  const registros = data ? JSON.parse(data) : [];
  registros.push(nuevoRegistro);

  await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
  console.log("Se agrego correctamente");

}

module.exports = {
  registrarInicioSesion,
  registrarCierreSesion,
  usuarioCreado,
};
