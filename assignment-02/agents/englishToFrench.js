const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function translateEnglishToFrench(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Translate the following English text to French:\n\n${text}`,
  });

  return response.text;
}

module.exports = { translateEnglishToFrench };