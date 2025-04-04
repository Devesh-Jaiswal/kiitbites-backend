const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Blank for Google login
  gender: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  // googleId: { type: String, default: null },
  access: { type: String, enum: ['user-standard', 'user-premium', 'admin', 'food court', 'refreshment', 'canteen', 'guest house', 'hospitality', 'main store'], default: 'user-standard' },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
