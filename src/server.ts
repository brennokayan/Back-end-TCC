import fastify from "fastify";
import { Routes } from "./routes/routes";
import cors from "@fastify/cors";
const app = fastify();
app.register(Routes)
app.register(cors, { 
    
  })
app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log("this server is runnig")
})