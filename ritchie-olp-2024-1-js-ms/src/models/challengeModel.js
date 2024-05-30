const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = `SELECT * FROM challenges`;
    const { rows } = await pool.query(query);
    return rows;
}

// Nueva función para obtener un reto por ID
exports.findById = async (id) => {
    const query = `SELECT * FROM challenges WHERE id = $1`;
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

exports.create = async (tittle, content, description) => {
  const query = `INSERT INTO challenges (title, content, description)
                VALUES ($1, $2, $3)
                RETURNING id, title, content, description`;
  const values = [tittle, content, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
}
