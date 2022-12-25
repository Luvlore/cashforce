import 'dotenv/config';
import express from 'express';
import router from './routes';

const app = express();

const port = process.env.PORT || 3001;

app.use(router);

app.listen(port, () => {
    console.log(`Server is up and running at: http://localhost:${port}`);
});
