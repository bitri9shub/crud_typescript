import { type Request, type Response } from "express";
import { asyncHandler } from "../utils/handlers.util";
import userModel from "../models/user.model";

class UserController {

    getAllUsers = asyncHandler(async (req: Request, res: Response) => {
        const users = await userModel.find()
        return res.status(200).json({ data: users })
    })

    getUserById = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params
        const user = await userModel.findById(id)
        return res.status(200).json({ data: user })
    })

    createUser = asyncHandler(async (req: Request, res: Response) => {
        const { username, password } = req.body
        const user = new userModel({ username, password })
        await user.save()
        return res.status(201).json({
            message: "created successfuly",
            data: user
        })
    })

    updateUserById = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params
        const { username, password } = req.body
        const user = await userModel.findById(id)
        if (user) {
            user.username = username
            user.password = password

            await user.save()
            return res.status(200).json({
                message: "updated successfuly",
                data: user
            })
        }
        return res.sendStatus(404)
    })

    deleteUserById = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params
        await userModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "deleted successfuly"
        })
    })

}

export default new UserController()