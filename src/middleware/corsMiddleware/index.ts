import cors, { CorsOptionsDelegate, CorsOptions } from 'cors';
import express from 'express';

import allowlist from './allowlist';

const router = express.Router();

const corsOptionsDelegate: CorsOptionsDelegate = (req, callback) => {
  let corsOptions: CorsOptions;

  // Enable CORS if origin is in allowlist
  if (allowlist.indexOf(req.header('Origin')!) !== -1)
    corsOptions = { origin: true };
  // Disable CORS not in allowlist
  else corsOptions = { origin: false };

  // Callback expects two parameters: error and options
  callback(null, corsOptions);
};

// Use CORS middleware
router.use(cors(corsOptionsDelegate));

export default router;
