import users from "../models/userModel.js";

export const getAllUser = () => {
    try {
        res.send(users);
    }catch (error) {
        console.log("error" + error);
    }
};