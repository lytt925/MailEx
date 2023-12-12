import bcrypt from 'bcrypt';
import userService from '../services/user.services.js';
import hashPassword from '../helper/hashPassword.js';
import { generateAccessToken } from '../helper/jwt.js';


const generateSigninResponse = (user) => {
  if (user) {
    // const tokenPayload = {
    //   id: user.id,
    //   username: user.username,
    //   email: user.email,
    //   provider: user.provider
    // }
    const { token, expiresIn } = generateAccessToken(user);
    const response = {
      "access_token": token,
      "access_expired": expiresIn,
      user
    }
    return response
  }
}

const signupUser = async (req, res) => {
  const { username, email, password, provider } = req.body

  // check if user exists
  const existUser = await userService.getUserByEmailorUsername(email, null, ['id']);
  if (existUser) {
    return res.status(409).send({ error: "User already exists" })
  }

  try {
    const hash = await hashPassword(password);
    const user = await userService.createUser({ username, email, password: hash, provider });
    // Create the access token
    const response = generateSigninResponse(user);
    return res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}

const loginUser = async (req, res) => {
  const { username, email, password, provider, token } = req.body;

  // if (token) {
  //   const user = authenticateToken(token);
  //   console.log(user)
  // }

  try {
    if (provider !== "native" && !email && !username) {
      return res.status(400).send({ error: "invalid request" });
    }

    if (provider === "native" && !password) {
      return res.status(400).send({ error: "password required" });
    }

    // find the user by email or password
    let user = null;
    if (email) {
      user = await userService.getUserByEmailorUsername(
        email,
        null,
      );
      // console.log("login", user)
      if (!user) {
        return res.status(403).send({ error: "email not found" });
      }
    } else if (username) {
      user = await userService.getUserByEmailorUsername(
        null,
        username,
      );
      // console.log("login", user)
      if (!user) {
        return res.status(403).send({ error: "username not found" });
      }
    }

    // Authentication
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      delete user.password;
      const response = generateSigninResponse(user)
      res.cookie('userId', user.id, { path: '/', httpOnly: true, maxAge: 3600000, sameSite: 'none', secure: process.env.NODE_ENV === 'production' });
      return res.status(200).send(response)
    } else {
      return res.status(403).send({ error: "wrong password" });
    }

  } catch (err) {
    console.log(err)
    return res.status(500).send({ error: "Internal Server Error" })
  }
}


const getFriends = async (req, res) => {
  const userId = req.tokenPayload.id
  try {
    const friends = await userService.getFriendsById(userId);
    const response = {
      friends: friends
    }
    return res.status(200).send(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: "Internal Server Error" })
  }
}


const getRecommendUsers = async (req, res) => {
  // get from params
  const userId = req.query.userId
  try {
    let users;
    const response = {
      users: users
    }

    if (!userId) {
      users = await userService.getRandomUsers();
    } else {
      users = await userService.getSimilarUsers(userId);
    }

    response.users = users;
    return res.status(200).send(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: "Internal Server Error" })
  }
}

export default {
  signupUser,
  loginUser,
  getFriends,
  getRecommendUsers
}
