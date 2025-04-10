import  {Request, Response } from 'express'

export const getUser = async(req : Request, res: Response) => {
    try {
        return res.status(200).json({
            
            message:"User route works!"
        })
    }catch(error){
        return res.status(500).json({
            message:"Something went wrong",
            error: error
        })
    }
}