const { verifyEmail } = require('../models/forgot')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const controller = {}

controller.forgot = async (req, res) => {
    try {
        const { email } = req.body
        console.log(req.body);
        // Verificar el correo electrónico en la base de datos
        const data = await verifyEmail({ email })
        console.log(data);
        if (!data.status) {
            // Si no se encuentra el correo electrónico, devolver un error
            return res.status(data.code).json({ error: 'Email not found' })
        }

        // Si se encuentra el correo electrónico, enviar la contraseña desencriptada en un enlace
        const decryptedPassword = data.password
        
        // Generar un token JWT con la contraseña para enviarlo en el enlace de restablecimiento
        const token = jwt.sign({ password: decryptedPassword }, 'secret', { expiresIn: '1h' })

        // Construir el enlace de restablecimiento
        const resetLink = `http://polizaqui.com/reset-password/${token}` // Cambia la URL según tu configuración

        // Devolver el enlace de restablecimiento al frontend
        res.status(200).json({ resetLink })

    } catch (err) {
        console.error('Error en forgot:', err)
        res.status(500).json({ error: 'Server error' })
    }
}

module.exports = controller
