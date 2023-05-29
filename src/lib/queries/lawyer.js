import { DbContext, convertQueryResult } from '../db'

export const getLawyers = async () => {
    return new Promise((resolve, reject) => {
        DbContext.query('SELECT * FROM lawyers', (error, results) => {
            if (error) {
                reject(error)
            }
            
            resolve(convertQueryResult(results))
        })
    })
}

export const saveLawyer = async ({name, title, phone, image}) => {
    return new Promise((resolve, reject) => {
        DbContext.query(`INSERT INTO lawyers (name, title, phone, image) VALUES ('${name}', '${title}', '${phone}', '${image}')`, 
        [name, title, phone, image], (err, result) => {
            if (err) {
                reject(err);
            }

            resolve();
        })
    });
}

export const deleteLawyer = async (id) => {
    console.log("TAASD, ", id)
    return new Promise((resolve, reject) => {
        DbContext.query(`DELETE FROM lawyers WHERE id = ${id}`, (err, result) => {
            if (err) {
                reject(err);
            }

            resolve();
        })
    });
}