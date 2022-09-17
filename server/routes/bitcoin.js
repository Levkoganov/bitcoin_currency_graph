import express from 'express'; 
import bitcoin from '../controller/bitcoin_con.js'; // Controller

const router = express.Router();

// Get routers
router.get('/:date', bitcoin);

export default router;
