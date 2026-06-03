const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function translateFrenchToHebrew(text) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Translate the following French text to Hebrew:\n\n${text}`,
    });

    return response.text;
}

module.exports = { translateFrenchToHebrew };