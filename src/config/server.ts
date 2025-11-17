import express from 'express';
import userRouter from '../routes/user.route';
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors()); 
app.use('/user', userRouter)

export default app