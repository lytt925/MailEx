import { Router } from 'express';
import userRouter from './user.js';
import mailRouter from './mail.js';
import locationRouter from './location.js';

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
router.use('/location', locationRouter)


export default router
