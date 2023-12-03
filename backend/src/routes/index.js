import { Router } from 'express';
import userRouter from './user.js';
import mailRouter from './mail.js';


const router = Router();


/**
 * @swagger
 * /healthcheck:
 *   get:
 *     summary: Healthcheck
 *     description: Healthcheck
 *     tags:
 *       - Healthcheck
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/healthcheck', (req, res) => {
  res.send('OK')
})

router.use('/user', userRouter)
router.use('/mail', mailRouter)
// router.use('/order', orderRouter)


export default router
