import { Router } from 'express';
import jwtAuthentication from '../middleware/jwtAuthentication.js'
import mailController from '../controllers/mail.controller.js'
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Mail
 *  description: Mails API
*/

/**
 * @swagger
 * /mail:
 *   get:
 *     tags:
 *       - Mail
 *     summary: Get user's mail
 *     description: Get the user's mail using access token
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: paging
 *         in: query
 *         description: "Paging for request next page."
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get user profile successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mails:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Mail'
 *       400:
 *         description: "Client Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: client error message
 *                   example: Invalid token
 *       500:
 *         description: "Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: server error message
 *                   example: Internal server error
 */
router.get('/', jwtAuthentication, mailController.getAllMail);




/**
 * @swagger
 * /mail:
 *   post:
 *     tags:
 *       - Mail
 *     summary: Create a mail
 *     description: Create a mail using access token
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [sender_id, receiver_id, subject, content]
 *             properties:
 *               sender_id:
 *                 type: integer
 *                 example: 3
 *                 description: Identifier for the sender of the mail.
 *               receiver_id:
 *                 type: integer
 *                 example: 18
 *                 description: Identifier for the receiver of the mail.
 *               subject:
 *                 type: string
 *                 example: 頂樓風好大
 *                 maxLength: 50
 *                 description: Subject of the mail.
 *               content:
 *                 type: string
 *                 example: |
 *                        最近，我感到壓力非常大，這影響了我的學習和日常生活。
 *                        
 *                        我發現當我站在學校的頂樓時，那裡的風特別大，似乎能帶走我心中的一部分重擔。站在那裡，我會深深地呼吸，試圖讓自己平靜下來。但是，即使是這樣的短暫逃避，也不能徹底解決我的壓力問題。
 *                          
 *                        我認為我的壓力來源於學業負擔和對未來的不確定感。我努力學習，但有時候感覺無法跟上。我擔心自己的表現不足以滿足期望，這讓我感到焦慮和沮喪。
 *       
 *                        我希望能和您談談，或許您能提供一些指導或建議來幫助我應對這些壓力。我非常尊重您的意見，並且相信您的經驗和知識可以幫助我找到解決問題的方法。
 *                 description: Content of the mail.
 *               status:
 *                 type: string
 *                 enum:
 *                   - draft
 *                   - arrived
 *                   - sending
 *                 default: 'draft'
 *                 description: Status of the mail.
 *     responses:
 *       200:
 *         description: Create the mail successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Created successfully"
 *       400:
 *         description: Client Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing receiver id"
 *       500:
 *         description: "Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: server error message
 *                   example: Internal server error
 */
router.post('/', jwtAuthentication, mailController.createMail);


/**
 * @swagger
 * /mail/{friendId}:
 *   get:
 *     tags:
 *       - Mail
 *     summary: Get user's mail associated with a friend
 *     description: Get the user's mail associated with a friend using access token
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: friendId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the friend
 *       - in: query
 *         name: paging
 *         required: false
 *         description: "Paging for request next page."
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get user profile successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 friend_profile: 
 *                   $ref: '#/components/schemas/User'
 *                 mails:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Mail'
 *       400:
 *         description: "Client Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: client error message
 *                   example: Invalid token
 *       500:
 *         description: "Server Error"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: server error message
 *                   example: Internal server error
 */
router.get('/:friendId', jwtAuthentication, mailController.getMailByFriendId);



router.patch('/:mailId', jwtAuthentication, mailController.editMailbyMailId);

export default router