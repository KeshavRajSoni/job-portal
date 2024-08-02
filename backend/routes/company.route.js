import express from 'express';
import { isAuthenticated, isProtected } from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';


const CompanyRouter = express.Router();

CompanyRouter.route('/register').post(isAuthenticated, isProtected, registerCompany);
CompanyRouter.route("/get").get(isAuthenticated, getCompany);
CompanyRouter.route("/get/:id").get(isAuthenticated, getCompanyById);
CompanyRouter.route("/update/:id").put(isAuthenticated, updateCompany);


export default CompanyRouter;