async function semanticDistance(originalText, translatedText) {
    const originalWords = originalText.split(" ").length;
    const translatedWords = translatedText.split(" ").length;

    const difference = Math.abs(originalWords - translatedWords);

    return difference;
}

module.exports = { semanticDistance };