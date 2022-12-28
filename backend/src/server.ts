import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import router from './routes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is up and running at: http://localhost:${PORT}`);
});
