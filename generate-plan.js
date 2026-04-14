import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function run() {
  const prompt = `
Create a detailed development PLAN in Markdown for the EventStar project.

Include:
- Project phases
- Timeline
- Milestones
- Technologies to use
- Team roles
- Risks and mitigation

Write clearly and structured.
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  fs.writeFileSync("PLAN.md", text);
  console.log("PLAN created!");
}

run();