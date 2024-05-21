const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');

const filePath = path.join(__dirname, 'logs.json');
const User = mongoose.model('User'); // Modelo de usuario de la base de datos

async function appendToFile(userData) {
  try {
    const existingData = await fs.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(existingData);
    const timestamp = Date.now();

    const user = await User.findOne({ name: userData.user });
    if (!user) {
      throw new Error(`Usuario no encontrado: ${userData.user}`);
    }

    const newEntry = {
      user: user.name,
      userId: user._id,
      action: userData.action,
      timestamp,
    };

    parsedData.push(newEntry);
    const updatedData = JSON.stringify(parsedData, null, 2);
    await fs.writeFile(filePath, updatedData, 'utf8');

    console.log(`Entrada de auditoría agregada: ${JSON.stringify(newEntry)}`);
  } catch (err) {
    console.error('Error al escribir en el archivo de auditoría:', err);
  }
}

module.exports = {
  appendToFile,
};
