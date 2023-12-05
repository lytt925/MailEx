import mailService from '../services/mail.services.js';
import userServices from '../services/user.services.js';
import { ITEM_PER_PAGE } from '../constants.js'


const getAllMail = async (req, res) => {
  // get user id from req.tokenPayload
  const userId = req.tokenPayload.id
  const pageNumber = parseInt(req.query.paging) || 0;
  const mail = await mailService.getMailById(
    userId,
    pageNumber
  ); // limit, page
  if (mail) {
    const response = {
      mails: mail,
      ...(mail.length < ITEM_PER_PAGE ? {} : { next_paging: pageNumber + 1 })
    }
    res.status(200).send(response);
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

const getMailByFriendId = async (req, res) => {
  // get user id from req.tokenPayload
  const userId = req.tokenPayload.id
  const friendId = req.params.friendId
  const pageNumber = parseInt(req.query.paging) || 0;
  const mail = await mailService.getMailByIdandFriendId(
    userId,
    friendId,
    pageNumber
  ); // limit, page
  const data = await userServices.getFriendProfileById(friendId)
  if (mail) {
    const response = {
      friend_profile: data[0],
      mails: mail,
      ...(mail.length < ITEM_PER_PAGE ? {} : { next_paging: pageNumber + 1 })
    }
    res.status(200).send(response);
  } else {
    res.status(404).send({ message: 'Mail not found' });
  }
}


export default {
  getAllMail,
  createMail,
  getMailByFriendId
}