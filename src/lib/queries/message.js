import { DbContext, convertQueryResult } from "../db";

export const saveMessage = ({message, name, email}) => {
    return new Promise((resolve, reject) => {
        DbContext.query(`INSERT INTO messages (message, name, email, created_date) VALUES ('${message}', '${name}', '${email}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`, 
        [message, name, email, new Date()], (err, result) => {
            if (err) {
                reject(err);
            }

            resolve();
        })
    });
}

export const getMessages = () => {
    return new Promise((resolve, reject) => {
        DbContext.query('SELECT * FROM messages', (error, results) => {
            if (error) {
                reject(error)
            }
            
            resolve(convertQueryResult(results))
        })
    })
}