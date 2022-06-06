import express from "express";
import morgan from "morgan";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(cors())
app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(express.json())

app.use(taskRoutes)
// Configurar cabeceras y cors




app.use((err, req, res, next) => {
    let message = ""
    if (err.code == '23505') {
        message = 'Ya existe tarea con este titulo'
    } else if (err.code == '42P01') {
        message = 'no existe registro a eliminar'
    } else if (err.code == '123') {
        message = "task not found"
    }
    return res.json({ message })
})






app.listen(app.get('port'), () => console.log(`server started on port ${app.get('port')}`))