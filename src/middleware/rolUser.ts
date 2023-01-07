import { Response, NextFunction } from 'express'
import { handleHttp } from '../utils/error.handle'

const checkRol = (roles: any[]) => (req: any, res: Response<any, Record<string, any>>, next: NextFunction) => {
  try {
    const { user } = req
    const rolByUser = user.role
    const checkValueRol = roles.some((rolSingle) => rolByUser.includes(rolSingle))
    if (!checkValueRol) {
      handleHttp(res, 'USER_NOT_HAVE_PERMISSION', 403)
      return
    }
    next()
  } catch (error) {
    handleHttp(res, 'ERROR_PERMISSION_DENIED', 403)
  }
}

export { checkRol }
