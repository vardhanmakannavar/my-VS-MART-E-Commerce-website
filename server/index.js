import express, { Router } from 'express';  //import nodemon from 'nodemon';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';



import connection from './databases/db.js';
import defaultData from './databases/default.js';
import router from './routes/route.js';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', router);


const PORT = 8000;
 
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log('server is running successfully 0n port:'+PORT));

defaultData();