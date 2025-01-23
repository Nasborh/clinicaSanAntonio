import { createPool } from "mysql2/promise";

const connection = createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "clinica",
    password: "7ank2pk2"
})

export default connection;