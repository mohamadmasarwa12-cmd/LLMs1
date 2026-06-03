const { runTranslationChain } = require("./orchestrator");

const originalSentence =
    "One for all and all for one. Knowledge grows when it is shared.";

runTranslationChain(originalSentence)
    .then(() => {
        console.log("\nTranslation chain completed.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });