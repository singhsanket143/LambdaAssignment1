import { Handler } from "express";

export const userGETController: Handler = (req, res) => {
	res.status(200).json({ message: "User route works!" });
};
