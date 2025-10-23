import { nanoid } from "nanoid";
import UrlModel from "../model/db.js";

export const saveData = async (req, res) => {
  try {
    const { originalURL } = req.body;

    if (!originalURL) {
      return res.status(400).json({ success: false, message: "Original URL is required" });
    }

    const id = nanoid(6);
    const shortUrl = `${req.protocol}://${req.get("host")}/short/shorten/${id}`;

    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const newUrl = new UrlModel({
      originalURL,
      shortURL: shortUrl,
      urlCode: id,
      expiresAt: expirationDate,
    });

    await newUrl.save();

    res.status(200).json({ success: true, shortUrl:newUrl });
  } catch (error) {
    console.error("Error saving URL:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const urlDoc = await UrlModel.findOne({ urlCode: id });

    if (!urlDoc) {
      return res.status(404).send("URL not found");
    }

    if (urlDoc.expiresAt && new Date() > urlDoc.expiresAt) {
      return res.status(410).send("URL has expired");
    }

    res.redirect(urlDoc.originalURL);
  } catch (error) {
    console.error("Redirect error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAllLinks = async (req, res) => {
  try {
    const urls = await UrlModel.find().sort({ createdAt: -1 }); 
    res.status(200).json({success:true, message:"All urls data", urls:urls});
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ message: "Failed to retrieve URLs" });
  }
};
