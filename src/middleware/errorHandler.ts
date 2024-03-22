import { Request, Response } from 'express'

const errorHandler = (err: Error, req: Request, res: Response) => {
    if (err instanceof TypeError) {
        return res.status(500).json({
            errors: [{ message: 'Something went wrong' }],
        })
    }

    res.status(500).send({ errors: [{ message: 'Something went wrong' }] })
}

export default errorHandler
