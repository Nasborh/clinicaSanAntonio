import  mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "clinica"
})

export default connection;