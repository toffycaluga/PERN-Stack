import pool from "./db.js";



export async function get_tasks(id) {
    const client = await pool.connect();
    if (!id) {
        const { rows } = await client.query({
            text: 'SELECT * FROM tasks',
            name: 'GET-ALL-TASKS'
        })
        client.release()
        return rows;
    } else {
        const { rows } = await client.query({
            text: 'SELECT * FROM tasks WHERE id = $1 ',
            values: [id],
            name: 'SELECT-A-SINGLE-TASK'
        })
        client.release
        return rows[0];
    }
};

export async function create_task(title, description) {
    const client = await pool.connect();

    await client.query({
        text: 'INSERT INTO tasks (title, description) VALUES($1,$2)',
        values: [title, description],
        name: 'INSERT-A-SINGLE-TASK'
    })
    client.release();

};


export async function delete_task(id) {
    const client = await pool.connect();
    const { rows } = await client.query({
        text: 'DELETE FROM tasks WHERE id=$1 returning *',
        values: [id],
        name: 'DELETE-TASK'
    })
    client.release()
    return rows
}

export async function update_task(id, title, description) {
    const client = await pool.connect();
    const { rows } = await client.query({
        text: 'UPDATE tasks set title = $2, description = $3 WHERE id=$1 returning *',
        values: [id, title, description],
        neme: "UPDATE-OF-TASKS"
    })
    client.release();
    return rows
}