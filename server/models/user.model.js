import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [2, "Username must be at least 2 characters long"],
      maxlength: [40, "Username can't be more than 40 characters long"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already registered"],
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
