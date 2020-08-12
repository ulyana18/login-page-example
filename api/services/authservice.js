const crypto = require('crypto');
const pool = require('../db/queries');

class AuthService {
    constructor() {}

    async SignUp(name, email, password) {
        const passwordHashed = await crypto
            .createHash("sha256")
            .update(password)
            .digest('hex');
        console.log(passwordHashed);

        pool.query('INSERT INTO users (email, password, name) VALUES ($1, $2, $3)', [email, password, name], (error, result) => {
            if (error) {
                throw error
            }
            // response.status(201).send(`User added with ID: ${result.insertId}`)
            
        });
    } 
}

module.exports = AuthService;