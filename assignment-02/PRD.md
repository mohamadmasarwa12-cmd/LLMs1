# Product Requirements Document (PRD)

## Project Name

Multi-Agent Translation Chain

---

## Purpose

The purpose of this project is to demonstrate how information changes when it passes through multiple AI agents and multiple language transformations.

The project simulates the "Broken Telephone" effect described in the assignment instructions.

---

## Problem Statement

When information passes through several agents, the original meaning may drift.

This project measures that drift using a semantic distance score.

---

## Functional Requirements

### FR1

The system shall accept an English sentence.

### FR2

The system shall translate English to French.

### FR3

The system shall translate French to Hebrew.

### FR4

The system shall translate Hebrew back to English.

### FR5

The system shall calculate a semantic distance score.

### FR6

The system shall display all intermediate translations.

---

## Non-Functional Requirements

### NFR1

The system shall use Gemini API.

### NFR2

The system shall run locally using Node.js.

### NFR3

The system shall complete execution within a few seconds.

---

## Success Criteria

- Translation chain completes successfully.
- All agents return valid output.
- Semantic distance score is calculated.
- Final output is displayed to the user.

---

## Users

- Student
- Lecturer
- Course Evaluator

---

## Expected Outcome

The system demonstrates how meaning changes across multiple AI translation agents and provides a measurable score for the semantic difference.