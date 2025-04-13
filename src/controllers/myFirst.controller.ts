import {Request,  Response} from 'express';

export const getUser=(req: Request, res: Response)=>{
    
    res.status(200).send({"message": "User route works!" });
}