import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: false,
  })
);

await mongoose.connect(
  "mongodb+srv://angeshchauhan44:zbMmBInVSOHQYKn2@cluster0.qcut83x.mongodb.net/inventey-management"
);

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({}, { strict: false }),
  "products"
);

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return res.json("No data found");
    }
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/lookup", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          _id: "$category",
          count: 1,
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    console.log("Lookup error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});

app.get("/lowstock", async (req, res) => {
  try {
    const data = await Product.find()
      .sort({ quantity: 1 })
      .limit(5)
      .select("name quantity")
      .lean();

    res.json(data);
  } catch (error) {
    console.log("Lookup error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});

app.get("/monthly", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          value: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(data);
  } catch (error) {
    console.log("Lookup error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
