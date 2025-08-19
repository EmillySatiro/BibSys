import { supabase } from './supabaseConnection.js'
import serverless from 'serverless-http'
import fastify = require("fastify");

const sp = require('./supabaseConnection');

const app = fastify();

type Users = {
    name: string,
    email: string
}

app.get("/users", async () => {
    try {
        const {data: users} = await sp.from("users").select("*")
        return {value: users}
    } catch(error) {
        console.error(error)
        throw error
    }
})

app.post("/users", async (request, response) => {
    try {
        const {name, email} = request.body as Users

        const {data: createdUser} = await sp.from("users").insert([
            name,
            email
        ])

        return {
            value: createdUser ? createdUser[0] : null
        }

    } catch(error) {
        console.error(error)
        throw error
    }
})

export const handler = serverless(app)

// app.listen(
//   {
//     host: '0.0.0.0',
//     port: process.env.PORT ? Number(process.env.PORT) : 3333,
//   },
//   (err) => {
//     if (err) {
//       console.error('Error starting server:', err);
//       process.exit(1);
//     }
//     console.log('Server working');
//   }
// );
