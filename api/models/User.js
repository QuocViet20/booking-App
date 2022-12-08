import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requrie: true,
      unique: true,
    },
    email: {
      type: String,
      requrie: true,
      unique: true,
    },
    password: {
      type: String,
      requrie: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
