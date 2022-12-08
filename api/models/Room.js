import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requrie: true,
    },
    price: {
      type: Number,
      requrie: true,
    },
    maxPeople: {
      type: Number,
      requrie: true,
    },
    desc: {
      type: String,
      default: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
