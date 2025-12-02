// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: String, 
//     email: String, 
//     password: String,
//     role: String,
//     batch: Number,
//     cur_role: String,
//     company: String,
//     location: String,
//     pic: String,
//     sendMessage: Array,
//     receivedMessage: Array,
//     lastLogin: {
//         type: Date,
//         default: Date.now
//     }
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);

// export default User;
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      enum: ["student", "alumni"],
      default: "student",
    },

    batch: {
      type: Number,
    },

    cur_role: {
      type: String, // e.g., SDE, Intern, PM etc.
    },

    company: {
      type: String,
    },

    location: {
      type: String,
    },

    profilePic: {
      type: String,
      default: "",
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
