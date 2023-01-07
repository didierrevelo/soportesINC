import { sign, verify } from 'jsonwebtoken'
const JWT_SECRET = (process.env.JWT_SECRET != null) ? process.env.JWT_SECRET : 'ERROR_TOKEN'

const generateToken = (email: string): string => {
  const jwt = sign({ email }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}

const verifyToken = async (jwt: any): Promise<any> => {
  const isOk = await verify(jwt, JWT_SECRET)
  return isOk
}

export { generateToken, verifyToken }
