const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'auditTrail.json');
console.log("audit-trail working");


const registerLoginSession = async (email) => {
    const newRecord = {
        date: new Date().toISOString(),
        email: email,
        tipo: 'login',
    };

    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(newRecord);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
    console.log("login registered in the audit");
};

const registerCloseSession = async (email) => { //no encuentro donde meter esto, no hay cierre de sesion como tal
  const newRecord = {
    email: email,
    tipo: 'logout',
    date: new Date().toISOString(),
  };
    const data = await fs.promises.readFile(filePath, 'utf8');
    const registros = data ? JSON.parse(data) : [];
    registros.push(newRecord);

    await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 2) + '\n');
    console.log("logout recorded in the audit");
};

const userCreated = async (date, userId, newUser, newEmail) => {
  
  const newRecord = {
    date: date,
    email: userId,
    tipo: 'userCreated',
    newUser: newUser,
    newEmail: newEmail,
  };

  console.log(userId);

  const data = await fs.promises.readFile(filePath, 'utf-8');
  const registros = data ? JSON.parse(data) : [];
  registros.push(newRecord);

  await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 4) + '\n');
  console.log("The added user was successfully added to the audit!");

}

const usuarioEliminado = async (date, userId, userDelete) =>{
  const newRecord = {
    date: date,
    email, userId,
    userDelete,
  };

  const data  = await fs.promises.readFile(filePath, 'utf-8');
  const registros = data ? JSON.parse(data):[];
  registros.push(newRecord);

  await fs.promises.writeFile(filePath, JSON.stringify(registros, null, 2) + '\n');
  console.log("The deleted user was successfully added to the audit!");

}

module.exports = {
  registerLoginSession,
  registerCloseSession,
  userCreated,
  usuarioEliminado,
};
