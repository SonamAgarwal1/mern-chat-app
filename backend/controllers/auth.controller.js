import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password dont match" });
    }
    const user = await User.findOne({ username }); //check in DB if username exists
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH Password here
    const salt = await bcryptjs.genSalt(10); //The higher it is it will be more secure and at the same time will be slower
    const hashpassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashpassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save(); //save it to the DB
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  res.send("Loggedin");
  console.log("login");
};

export const logout = (req, res) => {
  console.log("logout");
};
