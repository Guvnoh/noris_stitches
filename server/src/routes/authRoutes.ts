import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    res.json({ token, email: admin.email });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
