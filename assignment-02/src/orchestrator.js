const { translateEnglishToFrench } = require("../agents/englishToFrench");
const { translateFrenchToHebrew } = require("../agents/frenchToHebrew");
const { translateHebrewToEnglish } = require("../agents/hebrewToEnglish");
const { semanticDistance } = require("./semanticDistance");

async function runTranslationChain(originalText) {
    console.log("Original English:");
    console.log(originalText);

    const frenchText = await translateEnglishToFrench(originalText);
    console.log("\nFrench Translation:");
    console.log(frenchText);

    const hebrewText = await translateFrenchToHebrew(frenchText);
    console.log("\nHebrew Translation:");
    console.log(hebrewText);

    const finalEnglishText = await translateHebrewToEnglish(hebrewText);
    console.log("\nFinal English Translation:");
    console.log(finalEnglishText);

    const distance = await semanticDistance(originalText, finalEnglishText);
    console.log("\nSemantic Distance Score:");
    console.log(distance);

    return {
        originalText,
        frenchText,
        hebrewText,
        finalEnglishText,
        distance,
    };
}

module.exports = { runTranslationChain };