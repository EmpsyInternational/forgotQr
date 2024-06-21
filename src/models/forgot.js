const pool = require('../utils/mysql.connect')
const bcrypt = require('bcrypt')

const verifyEmail = async ({ email }) => {
    try {
        const connection = await pool.getConnection()
        
        // Consulta para obtener la contraseña asociada al correo electrónico
        const sqlEmail = 'SELECT password FROM aliados WHERE email = ?'
        const [rows] = await connection.execute(sqlEmail, [email])

        connection.release()

        if (rows.length === 0) {
            return {
                status: false,
                message: 'Email not found',
                code: 404
            }
        }

        // Si se encuentra el correo electrónico, devolver la contraseña en texto plano
        const password = rows[0].password
        
        return {
            status: true,
            password: password
        }
        
    } catch (err) {
        console.error('Error en verifyEmail:', err)
        return {
            status: false,
            message: 'Server error',
            code: 500,
            error: err
        }
    }
}

module.exports = {
    verifyEmail
}
