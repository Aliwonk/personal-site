import * as express from 'express';
import * as adminController from '../controllers/adminPage';
import * as adminMiddleware from '../middlewares/adminPage';
const admin = express.Router();

// SIGNIN
admin.route('/signIn')
.get(adminController.signInFile)
.post(adminController.signIn);

// MIDDLEWARE
admin.use(adminMiddleware.checkToken);

// MAIN PAGE
admin.route('')
.get(adminController.adminFile)
    // delete statistic by id
admin.delete('/:id', adminController.deleteStatistic);

export { admin };