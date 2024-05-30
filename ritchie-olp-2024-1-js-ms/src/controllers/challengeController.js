const { getAll, findById, create } = require("../models/challengeModel");

exports.getAll = async (req, res) => {
    try {
        const challenges = await getAll();
        res.status(200).json(challenges);
    } catch (err) {
        console.error('Error en getAllChallenges:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Nuevo método para obtener un reto por ID
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const challenge = await findById(id);
        if (!challenge) {
            return res.status(404).json({ message: 'Reto no encontrado' });
        }
        res.status(200).json(challenge);
    } catch (err) {
        console.error('Error en getById:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

//Crear nuevo reto
exports.create = async (req, res) => { 
    try {
        const {title, content, description} = req.body;

        //Crear nuevo reto
        challenge = await create(title, content, description);
        res.status(201).json({message: 'Challenge successfully', challenge: challenge});
    } catch (error) {
        console.error('Error in add challenge', error);
        res.status(500).json({message: 'Error creating challenge', error});
    }
}
