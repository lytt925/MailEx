import { Router } from 'express';
import userController from '../controllers/user.controller.js'
import jwtAuthentication from '../middleware/jwtAuthentication.js'
const router = Router();

/**
 * @swagger
 * /user/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     description: Create a new user using name, email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, email, password, provider]
 *             properties:
 *               username:
 *                 type: string
 *                 example: lytt925
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ytli.tw@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Password123
 *               provider:
 *                 type: string
 *                 enum: [native, facebook, google, line]
 *     responses:
 *       200:
 *         description: Successful signup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   description: Access token
 *                 access_expired:
 *                   type: string
 *                   description: Access token expired time
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: User id
 *                     provider: 
 *                       type: string
 *                       description: Authentication provider
 *                     username:
 *                       type: string
 *                       description: User name
 *                     email:
 *                       type: string
 *                       description: User email
 *       400:
 *         description: "Client Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Client message
 *                   example: Invalid password
 *       500:
 *         description: "Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Server message
 *                   example: Internal server error
 */
router.post('/signup', userController.signupUser);




/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login user
 *     description: Login user using email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [password, provider]
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Password123
 *               provider:
 *                 type: string
 *                 enum: [native, facebook, google, line]
 *             oneOf:
 *               - required: [username]
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: lytt925
 *               - required: [email]
 *                 properties:
 *                   email:
 *                     type: string
 *                     format: email
 *                     example: johndoe@example.com
 *     responses:
 *       200:
 *         description: Successful signup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       description: Access token
 *                     access_expired:
 *                       type: string
 *                       description: Access token expired time
 *                     user:
 *                       type: object
 *                       properties:
 *                          id:
 *                            type: integer
 *                            description: User id
 *                          provider: 
 *                            type: string
 *                            description: Authentication provider
 *                          username:
 *                            type: string
 *                            description: User name
 *                          email:
 *                            type: string
 *                            description: User email 
 * 
 *       400:
 *         description: "Client Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Client message
 *                   example: Invalid password
 *       500:
 *         description: "Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Server message
 *                   example: Internal server error 
 */
router.post('/login', userController.loginUser);




/**
 * @swagger
 * /user/friends:
 *   get:
 *     tags:
 *       - User
 *     summary: get users' friends
 *     description: 
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Get user profile successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 friends:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
router.get('/friends', jwtAuthentication, userController.getFriends);


export default router