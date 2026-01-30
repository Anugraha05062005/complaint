import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Department", departmentSchema);
