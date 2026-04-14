import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function run() {
  const prompt = `
Write a professional PRD in Markdown for a project called EventStar.

EventStar is a platform for managing business events.

Include:
- Overview
- Problem
- Goals
- Users
- Features
- User Stories
- Requirements
- MVP
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  fs.writeFileSync("PRD.md", text);
  console.log("PRD created!");
}

run();