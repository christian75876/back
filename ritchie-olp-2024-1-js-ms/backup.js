// const fs = require('fs');
// const path = require('path');
// const schedule = require('node-schedule');
// const { pool } = require('./config/database');
// const port = process.env.PORT || 4000;


// async function realizarRespaldo() {
//   const fechaActual = new Date();
//   const nombreArchivo = verceldb_${fechaActual.getFullYear()}-${fechaActual.getMonth() + 1}-${fechaActual.getDate()}.sql;
//   const filePath = path.join(__dirname, nombreArchivo);


//   const cliente = await pool.connect();

//   try {

//     const resultado = await cliente.query(pg_dump -d verceldb -f ${filePath});

//     if (resultado.rowCount === 0) {
//       console.error('Error al generar el respaldo');
//       return;
//     }

//     console.log(Respaldo creado exitosamente: ${filePath});
//   } catch (error) {
//     console.error('Error durante el respaldo:', error);
//   } finally {
//      //Cerrar el cliente de la base de datos
//     await cliente.release();
//   }
// }


// const job = schedule.scheduleJob('0 18 * * *', realizarRespaldo);


// realizarRespaldo();


// //necesario instalar npm install pg node-schedule