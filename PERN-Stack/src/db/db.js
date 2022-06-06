import pg from 'pg'
import db from "../config.js"

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tasksdb',
    password: '1234',
    max: 12,
    min: 2,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000
})

export default pool;