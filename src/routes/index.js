const { Router } = require('express')


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

// router.use('/products', productRouter)
// router.use('/user', userRouter)
// router.use('/order', orderRouter)


module.exports = router;
