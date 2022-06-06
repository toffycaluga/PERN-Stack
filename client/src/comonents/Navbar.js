import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import React from 'react'

function Navbar() {

    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }} variant='h6' >
                            <Link to="/" style={{ textDecoration: 'none', color: '#eee' }}>
                                PERN Stack
                            </Link>
                        </Typography>
                        <Button variant='contained' color='info' onClick={() => navigate("/task/new")}>New Task</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar