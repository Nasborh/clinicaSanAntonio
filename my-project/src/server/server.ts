
const express = require('express');
const app = express()
const workoutRouter = require("./routes/workoutRoutes")
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"]
}

const port = process.env.PORT || 3000

app.use(cors(corsOptions))

app.get("/api", (_req, res) => {
    res.json({fruits: ['pera', 'manzana', 'mandarina']})
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});