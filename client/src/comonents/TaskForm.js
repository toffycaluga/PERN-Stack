import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Card, Typography, CardContent, TextField, Button } from '@mui/material'
import { useNavigate, useParams, } from 'react-router-dom'




function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const navigate = useNavigate();
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (editing) {
            await fetch(`http://localhost:5000/tasks/${params.id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/Json"
                },
                body: JSON.stringify(task),
            })
        } else {
            const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-type': 'application/json' }
            })
            const data = await res.json();
        }

        setLoading(false);
        navigate("/")
    }

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
        // console.log(e.target.name, e.target.value);
    }
    const loadTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json();
        setTask({ title: data.title, description: data.description })
        setEditing(true)
        console.log(data);

    }

    useEffect(() => {
        if (params.id) {
            loadTask(params.id)
        }
    }, [params.id])
    return (
        <Grid
            direction='column'
            container alignItems='center'
            justifyContent='center'
        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: '#1e272e',
                        padding: '1rem'
                    }}
                >
                    <Typography
                        variant='5'
                        textAlign='center'
                        color='white'
                    >
                        {editing ? "Edit Task" : "Add Task"}
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant='filled'
                                label='write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='title'
                                value={task.title}
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}

                            />
                            <TextField
                                variant='filled'
                                label='write your description'
                                multiline
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='description'
                                value={task.description}
                                onChange={handleChange}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />

                            <Button
                                variant='contained'
                                color='info'
                                type='submit'
                            >
                                Save

                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm