import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import router from './routes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(router);
app.use(cors);

app.listen(PORT, () => {
    console.log(`Server is up and running at: http://localhost:${PORT}`);
});
