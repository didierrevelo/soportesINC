import { NextFunction, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { handleHttp } from '../utils/error.handle'
import { Users } from '../models/user'
import { Technicians } from '../models/technicians'

const checkJwt = async (req: any, res: Response, next: NextFunction): Promise<any> => {
  try {
    if (req.headers.authorization === null) {
      handleHttp(res, 'UNAUTHORIZED', 401)
      return
    }
    const jwtByUser = req.headers.authorization
    const jwt = jwtByUser?.split(' ').pop()
    const verifiedToken = await verifyToken(jwt)

    if (verifiedToken === null) {
      handleHttp(res, 'NOT_PAYLOAD_DATA', 401)
      return
    }
    let user = await Users.findOne({
      where: { email: verifiedToken.email }
    })
    if (user === null) {
      user = await Technicians.findOne({
        where: { email: verifiedToken.email }
      })
    }
    if (verifiedToken !== null) {
      req.user = user
      next()
    } else {
      res.status(401).json({
        message: 'Unauthorized'
      })
    }
  } catch (e) {
    handleHttp(res, 'LOGIN_REQUIRED', 401)
  }
}

export { checkJwt }
