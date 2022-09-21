import express from 'express';

import { getProducts, getProductById } from '../controller/product-controller.js';
import { userSignup, userLogin } from '../controller/user_controller.js';
//import { addPaymentGateway } from '../controller/payment-controller.js';        

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);


router.get('/products', getProducts);
router.get('/product/:id', getProductById);

//router.post('/payment', addPaymentGateway);

export default router;


