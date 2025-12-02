import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    ],

    roomId: {
      type: String,
      required: true,
      unique: true,
    },

    jitsiUrl: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", meetingSchema);
