import Complaint from "../models/Complaint.js";

export const createComplaint = async (req, res) => {
  try {
    const {
      name,
      email,
      title,
      description,
      category,
      priority,
    } = req.body;

    // basic validation
    if (!name || !email || !title || !description) {
      return res.status(400).json({
        message: "name, email, title and description are required",
      });
    }

    const complaint = await Complaint.create({
      name,
      email,
      title,
      description,
      category,
      priority,
    });

    res.status(201).json({
      success: true,
      complaint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
