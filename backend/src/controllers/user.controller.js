import userService from '../services/user.services.js';
import hashPassword from '../helper/hashPassword.js';

// Example usage
// createUser({
//   username: 'john_doe',
//   email: 'john.doe@example.com',
//   password_hash: 'hashed_password_here',
// }).then(user => console.log('User created:', user))
// .catch(error => console.error('Error:', error));

const signupUser = async (req, res) => {
  const { username, email, password, provider } = req.body

  // check if user exists
  const existUser = await userService.getUserByEmail(email);
  console.log(existUser);
  if (existUser) {
    return res.status(409).send({ error: "User already exists" })
  }

  try {
    const hash = await hashPassword(password);
    const results = await userService.createUser({ username, email, password: hash, provider });
    res.status(201).send(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// const signupUser = async (req, res) => {
//   const { name, email, password } = req.body
//   // check if user exists
//   const existUser = await UsersTable.getUserByEmail(email)
//   if (existUser.length > 0) {
//     return res.status(409).send({ error: "User already exists" })
//   }

//   try {
//     const hash = await bcrypt.hash(password, 10);
//     const result = await UsersTable.insertUser({ name, email, hash })
//     const user = {
//       id: result.insertId,
//       provider: 'native',
//       name: name,
//       email: email,
//       picture: `https://ui-avatars.com/api/?name=${name}&background=random`,
//     }

//     // Create the access token
//     const { token, expiresIn } = generateAccessToken(user);
//     // Create the response object
//     const response = {
//       data: {
//         access_token: token,
//         access_expired: expiresIn,
//         user,
//       },
//     };
//     return res.status(200).send(response)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).send({ error: "Internal Server Error" })
//   }
// }


export default {
  signupUser
}