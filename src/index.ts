import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"; // Ensure this line is present
import { router } from './api/router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get('/', (req, res) => res.send('Server is running!'));
app.use('/api', router);

app.listen(port, () => {
 console.log(`App listening on port: ${port}`);
});
