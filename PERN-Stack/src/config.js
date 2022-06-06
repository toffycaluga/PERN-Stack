import { config } from "dotenv";
config()

console.log(process.env.DB_PASSWORD)

export default {
    db: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        max: 12,
        min: 2,
        idleTimeoutMillis: 3000,
        connectionTimeoutMillis: 2000
    }
}