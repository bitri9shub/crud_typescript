import { Request, Response, NextFunction } from 'express'

export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<Response>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (error: any) {
            console.log("srv error: ", error.message)
            res.sendStatus(500)
        }
    }
}