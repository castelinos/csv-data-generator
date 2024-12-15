import express from "express";
import config from "./config.js";
import { generateCSV } from "./controllers/csvGenerate.js";

const server = express();        
server.use(express.static('public'));

server.get('/generate-csv', generateCSV);

server.listen( config.server.port,()=>{
    console.log('Server started on port', config.server.port );
})
