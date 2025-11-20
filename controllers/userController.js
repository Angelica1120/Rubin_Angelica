import users from "../models/userModel.js";

export const getAllUser = (req, res) => {
    try {
        res.send(users);
    }catch (error) {
        console.log("error" + error);
        res.status(500).send("Server Error");
    }
};