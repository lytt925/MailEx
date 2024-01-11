import jwt from 'jsonwebtoken'

const authenticateTokenMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.status(401).send({ error: "ACCESS_TOKEN_NOT_FOUND" })
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, tokenPayload) => {
    if (err) {
      console.log(err)
      return res.status(403).send({ error: "INVALID_ACCESS_TOKEN" })
    }
    req.tokenPayload = tokenPayload
    next()
  })
}

export default authenticateTokenMiddleware