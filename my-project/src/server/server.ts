
import { QueryResult } from "mysql2";
import connection from "../../src/server/db/connection";
const express = require('express');
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"]
}

const port = process.env.PORT || 3000

app.use(cors(corsOptions))

app.get("/medicos", async (_req: any, res: {
  json(arg0: { error?: any; medicos?: QueryResult; }): unknown; render: (arg0: string, arg1: { medicos: QueryResult; }) => void; 
}) => {
    try {
        const [rows] = await connection.execute(`
          SELECT
        medicos.Id,
        medicos.Nombre,
        medicos.Apellido,
        especialidades.Nombre as especialidades
    FROM
        medicos
    inner join especialidades 
    on
    especialidades.Id = medicos.Id_Especialidad
          `)
        res.json({ medicos: rows })
    } catch (err) {
        res.json({ error: err })
    }
})

app.post('/api', (req: { body: { specialty: any; doctor: any; email: any }; }, res: { json: (arg0: { mensaje: string; }) => void; }) => {
  const { specialty, doctor, email } = req.body;
  console.log(specialty, doctor, email); // Imprime los datos en la consola del servidor
  // Aquí puedes guardar los datos en una base de datos, enviar un email, etc.
  res.json({ mensaje: "datos guardados correctamente"});
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});