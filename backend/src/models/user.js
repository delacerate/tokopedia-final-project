import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    default: uuidv4
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  profilePicture: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

const User = mongoose.model("User", userSchema);

export default User;
