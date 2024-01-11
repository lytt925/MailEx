/**
 * @swagger
 * components:
 *   schemas:
 *     Mail:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the Mail.
 *         sender_id:
 *           type: integer
 *           example: 3
 *           description: Identifier for the sender of the mail.
 *         receiver_id:
 *           type: integer
 *           example: 18
 *           description: Identifier for the receiver of the mail.
 *         subject:
 *           type: string
 *           example: 頂樓風好大
 *           maxLength: 50
 *           description: Subject of the mail.
 *         content:
 *           type: string
 *           example: |
 *                  最近，我感到壓力非常大，這影響了我的學習和日常生活。
 *                  
 *                  我發現當我站在學校的頂樓時，那裡的風特別大，似乎能帶走我心中的一部分重擔。站在那裡，我會深深地呼吸，試圖讓自己平靜下來。但是，即使是這樣的短暫逃避，也不能徹底解決我的壓力問題。
 *                    
 *                  我認為我的壓力來源於學業負擔和對未來的不確定感。我努力學習，但有時候感覺無法跟上。我擔心自己的表現不足以滿足期望，這讓我感到焦慮和沮喪。
 * 
 *                  我希望能和您談談，或許您能提供一些指導或建議來幫助我應對這些壓力。我非常尊重您的意見，並且相信您的經驗和知識可以幫助我找到解決問題的方法。
 *           description: Content of the mail.
 *         status:
 *           type: string
 *           enum:
 *             - draft
 *             - arrived
 *             - sending
 *           default: 'draft'
 *           description: Status of the mail.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the mail was created.
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the mail was updated.
 *         sent_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the mail was sent.
 */