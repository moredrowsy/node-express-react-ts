import { Request, Response } from 'express';
import userStore from '../stores/user.store';

/**
 * Get function for user
 *
 * @param {Object} req Requester
 * @param {Object} res Response
 * @return {Json}
 */
function index(req: Request, res: Response) {
  res.json(userStore.all());
}

/**
 * Post function for user
 *
 * @param {Object} req Requester
 * @param {Object} res Response
 * @return {Json}
 */
function showByUserName(req: Request, res: Response) {
  res.json(userStore.all().find((u) => u['username'] == req.params.username));
}

export default { index, showByUserName };
