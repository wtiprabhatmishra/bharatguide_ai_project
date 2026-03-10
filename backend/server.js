import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");

app.post("/ask", async (req, res) => {

 const { question } = req.body;

 const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

 const result = await model.generateContent(question);

 const response = result.response.text();

 res.json({answer: response});

});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
