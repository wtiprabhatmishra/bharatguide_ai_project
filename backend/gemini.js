import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY")

export async function askGemini(question) {

 const model = genAI.getGenerativeModel({
 model: "gemini-1.5-pro"
 })

 const result = await model.generateContent(question)

 const response = result.response.text()

 return response

}
