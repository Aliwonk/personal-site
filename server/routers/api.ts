import express from 'express';
import { Admin } from '../controllers/api';

const api = express.Router(),
apiController = new Admin();


// admin auth
api.route('/admin/auth')
.get(apiController.adminAuth);

// admin statistics
api.route('/admin/statistic')
.get(apiController.adminStatistic);

export { api };