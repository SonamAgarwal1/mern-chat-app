import { jwt } from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", //15 days
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 ** 1000, // in milli seconds-> 15days*24hrs*60mins*60secs*1000ms
    httpOnly: true, //prevent XSS attacks cross-site scriting
  });
};
