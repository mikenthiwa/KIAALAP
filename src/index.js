import app from './app';
import dotenv from 'dotenv';
import env from '../src/config/enviroment'

dotenv.config();

const PORT = env.PORT;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
