import mongoose, { Schema } from "mongoose";

const itemsSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    statistic: {
      type: String,
      trim: true,
    },
    items: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// mongoose.models = {}
export default mongoose.model("Items", itemsSchema);
