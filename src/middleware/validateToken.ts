import {Request, Response, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = <string>req.headers['authorization']

    if (token.startsWith('Bearer ')) token = token.slice(7, token.length)

    // Add client _id in the response local variables to be used as the
    // identifier in queries
    res.locals._id = jwt.verify(token, `${process.env.JWT_TOKEN}`)
    
    next()
  } catch (error) {
    return res.status(401).send(error)    
  }
}