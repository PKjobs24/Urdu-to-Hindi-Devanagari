// Apni 'main_v2.js' file ka poora purana code delete karein aur ye naya code paste karein
document.addEventListener('DOMContentLoaded', () => {
    
    // Mappings ko ek aisi tartib mein merge karein jo conflicts se bachaye
    const fullMap = {
        ...MAPPINGS.hamza_combo,
        ...MAPPINGS.final_vowels,
        ...MAPPINGS.hindustani_consonants,
        ...MAPPINGS.initial_vowels,
        ...MAPPINGS.vowels,
        ...MAPPINGS.hamza,
        ...MAPPINGS.numerals,
        ...MAPPINGS.punctuations,
    };

    const translator = new StringTranslator(fullMap);
    
    const convertButton = document.getElementById('convert-btn');
    const urduInput = document.getElementById('urdu-input');
    const hindiOutput = document.getElementById('hindi-output');

    convertButton.addEventListener('click', () => {
        let urduText = urduInput.value;
        
        // Final post-processing rules
        function applyRules(text) {
            // Rule 1: 'ain' (ع) ke masle ko theek karna
            // Example: 'بعد' -> 'बअद' (galat) -> 'बाद' (sahi)
            text = text.replace(/([^\s])अ/g, '$1ा'); // Agar 'ain' do consonants ke beech mein ho toh use 'aa' ki aawaz dein
            
            // Rule 2: Short vowel 'pesh' (u) ka masla theek karna
            // Example: 'ख़वद' -> 'ख़ुद'
            text = text.replace(/ख़वद/g, 'ख़ुद');
            text = text.replace(/मख़तलफ़/g, 'मुख़्तलिफ़');
            text = text.replace(/मतअस़्/g, 'मुतास्'); // मुतास्सिर

            // Rule 3: 'गांव' jaise lafzon ke liye Chandrabindu
            text = text.replace(/गांव/g, 'गाँव');
            text = text.replace(/पांव/g, 'पाँव');
            
            return text;
        }
        
        // Pehle basic mapping apply karein
        let hindiText = translator.translate(urduText);
        
        // Phir special rules apply karein
        hindiText = applyRules(hindiText);
        
        hindiOutput.textContent = hindiText;
    });
});
