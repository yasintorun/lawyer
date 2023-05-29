import mysql from 'mysql'

export const DbContext = mysql.createConnection({
host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export const convertQueryResult = (result) => {
    return JSON.parse(JSON.stringify(result))
}

