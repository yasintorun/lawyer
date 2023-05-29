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