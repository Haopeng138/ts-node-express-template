import { NextFunction, Request, Response } from 'express'

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof TypeError) {
        return res.status(500).json({
            errors: [{ message: 'Something went wrong' }],
        })
    }

    res.status(500).send({ errors: [{ message: 'Something went wrong' }] })
    next()
}

export default errorHandler
