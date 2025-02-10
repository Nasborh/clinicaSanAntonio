
import { QueryResult } from "mysql2";
import connection from "../../src/server/db/connection";
import { Console } from "console";
const express = require('express');
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: ["http://localhost:5173"]
}

const port = process.env.PORT || 3000

app.use(cors(corsOptions))
app.use(express.json())

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

app.post('/api', async (req: { body: { specialty: any, doctor: any, date: any, schedule: any, name: any, last_name: any, gender: any, born: any, identity_numb: any, phone: any, email: any }; }, res: { json: (arg0: { mensaje: string; }) => void; }) => {

  try {
    const { doctor, date, schedule, name, last_name, gender, born, identity_numb, phone, email } = req.body;

    const [inserted] = await connection.execute(`Insert into citas (Nombre, Apellido, Sexo, Fecha_Nacimiento, Cedula, Telefono, Correo, Id_Medico, Fecha_Cita, Hora_Cita) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, last_name, gender, born, identity_numb, phone, email, doctor, date, "16:30:20"]
    );

    console.log(inserted);

    //console.log(specialty, doctor, date, schedule, name, last_name, gender, born, identity_numb, phone, email); // Imprime los datos en la consola del servidor
    // Aquí puedes guardar los datos en una base de datos, enviar un email, etc.
    //res.json({ mensaje: "datos guardados correctamente"});
  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});