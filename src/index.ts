import { Request, Response } from 'express';

export const handler = (req: Request, res: Response) => {
    console.log(req);
    res.send('Logged Successfully');
};