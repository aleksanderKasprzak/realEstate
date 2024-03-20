import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await UserActivation.findOne({ username});
        if (!validUser) return next
            (errorHandler(404), 'User not Found');
        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) return next
        (errorHandler(401, 'Wrong credentials'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: hashedPass, ...userInfo } = validUser_doc;
        res.cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(userInfo);
    } catch (error) {
        next(error);
    }
}