const express= require('express');
const router = express.Router();


const UsersController= require('../Controllers/UsersController');


router.post("/registration",UsersController.registration);
router.post("/cart",UsersController.cart);
router.post("/create-product",UsersController.createProduct);
router.post("/create-order",UsersController.createOrder);



module.exports=router;