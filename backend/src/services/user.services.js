import { User } from '../models/user.model.js';

async function createUser(userData) {
  try {
    const newUser = await User.create(userData);
    const data = newUser.toJSON();
    return data;
  } catch (error) {
    console.error('Error creating new user:', error);
    throw error;  // or handle it as per your application's needs
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    throw error;
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
}

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}

const updateUser = async (id, user) => {
  try {
    const userToUpdate = await User.findByPk(id);
    if (userToUpdate) {
      await userToUpdate.update(user);
      return userToUpdate;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

const deleteUser = async (id) => {
  try {
    const userToDelete = await User.findByPk(id);
    if (userToDelete) {
      await userToDelete.destroy();
      return userToDelete;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export default {
  createUser,
  getUserByEmail,
  getUserById,
  getUsers,
  updateUser,
  deleteUser
}