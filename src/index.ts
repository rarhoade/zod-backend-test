import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(`PORT: ${port}`);

app.get('/', (req, res)=> {
  res.send('Express + Typescript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});




