import mailService from '../services/mail.services.js';

const getMyMail = async (req, res) => {
  // get user id from req.tokenPayload
  const userId = req.tokenPayload.id
  const pageNumber = parseInt(req.query.paging) || 0;
  const mail = await mailService.getMailById(
    userId,
    pageNumber
  ); // limit, page
  if (mail) {
    res.status(200).send(mail);
  } else {
    res.status(404).send({ message: 'Mail not found' });
  }
}

const createMail = async (req, res) => {
  // get user id from req.tokenPayload
  const sender_id = req.tokenPayload.id
  const mailBody = { ...req.body, sender_id }
  const mailId = await mailService.createMail(mailBody);
  if (mailId) {
    res.status(200).send({ message: "Created successfully" });
  } else {
    res.status(404).send({ message: "Failed to create or update" });
  }
}

export default {
  getMyMail,
  createMail
}