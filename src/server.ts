import './util/setEnv';
import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import path from 'path';

import userRoute from './routes/user.route';

// server app
const app: Application = express();

// middlewares
app.use(bodyParser.json()); // for POST params

// api routes
app.use('/api/user', userRoute);

// serve static public assets in '/public' route
app.use('/public', express.static(path.join(__dirname, 'public')));

// serve react's build in root
const clientPath = path.join(__dirname, 'client/build');
app.use(express.static(clientPath));

// web routes to react's entry point
const clientFile = path.join(clientPath, 'index.html');
app.get(['/', '/about', '/project/:id'], (req: Request, res: Response) =>
  res.sendFile(clientFile)
);
app.get('*', (req: Request, res: Response) =>
  res.status(404).sendFile(clientFile)
);

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
