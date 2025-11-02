// Is file ka poora purana code delete kar ke ye naya code paste karein
class StringTranslator {
    constructor(translationMap) {
        // Sabse lambi keys ko pehle replace karna zaroori hai
        // taake "اؤ" pehle replace ho, na ke "ا"
        this.sortedKeys = Object.keys(translationMap).sort((a, b) => b.length - a.length);
        this.translationMap = translationMap;

        // Saari keys ko ek saath dhoondne ke liye ek Regex banayein
        // Example: (اؤ|ائے|ی|و|...)
        this.regex = new RegExp(this.sortedKeys.map(key => this.escapeRegExp(key)).join('|'), 'g');
    }

    escapeRegExp(string) {
        // Regex special characters ko escape karein
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    translate(text) {
        // Regex ka istemal kar ke saari mappings ko ek saath apply karein
        return text.replace(this.regex, (matchedKey) => {
            return this.translationMap[matchedKey];
        });
    }
}
