import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function run() {
  const prompt = `
Create a detailed TODO list in Markdown for the EventStar project.

Include:
- Tasks divided by phases
- Development tasks
- Design tasks
- Testing tasks
- Deployment tasks

Make it clear and structured with checkboxes.
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  fs.writeFileSync("TODO.md", text);
  console.log("TODO created!");
}

run();