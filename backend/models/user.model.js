import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  //createdAt,updatedAt=>Member since <updatedAt>
  { timestamps: true }
);

const User = mongoose.model("User", userScheme); //User has to be capital

export default User;
