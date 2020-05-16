import express, { Request, Response, Router } from 'express';
import path from 'path';

const router: Router = express.Router();

// Serve static public assets in '/public' route
router.use('/public', express.static(path.join(__dirname, '../public')));

// Serve static files from React's build
const clientPath = path.join(__dirname, '../client/build');
router.use(express.static(clientPath));

// Register web routes to React's entry point
const clientFile = path.join(clientPath, 'index.html');
router.get(['/', '/about', '/project/:id'], (req: Request, res: Response) =>
  res.sendFile(clientFile)
);

router.get('*', (req: Request, res: Response) =>
  res.status(404).sendFile(clientFile)
);

export default router;
