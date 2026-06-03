# Assignment 02 - Multi-Agent Translation Chain

## Project Overview

This project demonstrates a multi-agent AI translation chain using the Gemini API.

The system translates a sentence through three languages:

English → French → Hebrew → English

After completing the translation chain, the system calculates a semantic distance score between the original sentence and the final translated sentence.

---

## Agents

### Agent 1
English → French

### Agent 2
French → Hebrew

### Agent 3
Hebrew → English

---

## Semantic Distance Tool

The Semantic Distance Tool measures the difference between the original English sentence and the final English sentence after the translation chain.

---

## Technologies

- Node.js
- Gemini API
- JavaScript
- dotenv

---

## Project Structure

assignment-02

agents/
- englishToFrench.js
- frenchToHebrew.js
- hebrewToEnglish.js

skills/
- english_to_french
- french_to_hebrew
- hebrew_to_english

src/
- main.js
- orchestrator.js
- semanticDistance.js

README.md
PRD.md
PLAN.md
TODO.md

---

## Running the Project

Install dependencies:

npm install

Run:

node src/main.js

---

## Example Output

Original English sentence

↓

French translation

↓

Hebrew translation

↓

Final English translation

↓

Semantic Distance Score

---

## Author

Mohamad Masarwa