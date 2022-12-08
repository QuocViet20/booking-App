import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requrie: true,
  },
  type: {
    type: String,
    requrie: true,
  },
  city: {
    type: String,
    requrie: true,
  },
  address: {
    type: String,
    requrie: true,
  },
  distance: {
    type: String,
    requrie: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    requrie: true,
  },
  desc: {
    type: String,
    requrie: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema);
