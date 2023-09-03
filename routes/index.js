import express from 'express';
import userRouter from './users.js';
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js';

let router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
// res.render('index', { title: 'Index' });
//});

router.use('/users',userRouter)
router.use('/cities',citiesRouter)
router.use('/itineraries',itinerariesRouter)

export default router
