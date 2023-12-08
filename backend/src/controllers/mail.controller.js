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


const editMailbyMailId = async (req, res) => {
  const userId = req.tokenPayload.id
  const { mailId } = req.params;
  const {
    senderId,
    newSubject,
    newContent,
    newStatus,
    newArrivedAt,
    newSentAt
  } = req.body;
  if (String(userId) !== String(senderId)) {
    return res.status(403).send({ message: 'You are not authorized to edit this mail' });
  }

  try {
    // Call the service function to update the mail
    const result = await mailService.editMail({
      mailId,
      newSubject,
      newContent,
      newStatus,
      newArrivedAt,
      newSentAt
    });

    // Check if the mail was successfully updated
    if (result > 0) {
      res.status(200).send({ message: 'Mail updated successfully' });
    } else {
      res.status(404).send({ message: 'Mail not found or no changes made' });
    }
  } catch (error) {
    // Handle any errors that occur during the update
    console.error(error);
    res.status(500).send({ message: 'An error occurred while updating the mail' });
  }
};


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
  editMailbyMailId,
  getMailByFriendId,
}