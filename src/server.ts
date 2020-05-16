import './providers/setEnv';
import express, { Application } from 'express';

import middlewareRouter from './providers/middlewareRouter';
import apiRouter from './providers/apiRouter';
import webRouter from './providers/webRouter';

// Server app
const app: Application = express();

// Register routers for middleware, API, and web. Order matters!
app.use(middlewareRouter);
app.use('/api', apiRouter);
app.use('/', webRouter);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
