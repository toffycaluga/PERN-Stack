import { create_task, delete_task, get_tasks, update_task } from "../db/db.controllers.js";


const getAllTask = async (req, res) => {
    try {
        const allTasks = await get_tasks()
        console.log(allTasks);
        res.send(allTasks);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }

}

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await get_tasks(id);
        if (task == undefined) {
            res.send('no se encontro el task')
        } else {

            res.send(task);
        }
    } catch (error) {
        res.send(error);
    }
}

const createTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        await create_task(title, description)
        res.json({ message: 'creado con exito' });
    } catch (error) {
        next(error);
        // console.log(manejoDeError(error.code));
        // const err = manejoDeError(error.code);
        // res.send(err);
    }

    // console.log(title, description);

}


const deleteTask = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await delete_task(id)
        if (result.length === 0) {
            next(
                error = { code: '123' }
            )
        }
        res.send('deleting a task');
    } catch (error) {
    }

}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await update_task(id, title, description);
    if (result.length === 0) {
        return res.status(404).json({
            message: "task not found"
        })
    } else {

        res.send('updating a task');
    }

}

export { getAllTask, getTask, createTask, deleteTask, updateTask };



