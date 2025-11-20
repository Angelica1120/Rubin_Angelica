//imports the users array from the userModel.js file
import users from "../models/userModel.js";

//get all users
export const getAllUser = (req, res) => {
    // Check if array is empty
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found." });
    }

    res.json(users);
};

//get a single user
export const getUserById = (req, res) => {
    // Check if array is empty BEFORE accessing
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "User database is empty." });
    }

    const id = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: `User with id ${id} not found.` });
    }

    res.json(user);
};
