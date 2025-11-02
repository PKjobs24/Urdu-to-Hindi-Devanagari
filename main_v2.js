// Apni 'main_v2.js' file ka poora purana code delete karein aur ye naya code paste karein
document.addEventListener('DOMContentLoaded', () => {
    
    // Step 1: Mappings ko sahi tartib mein merge karein
    // General rules (jaise 'ی' -> 'य') pehle aayengi
    // Specific rules (jaise 'ی' -> 'ी') baad mein aayengi taake woh overwrite kar sakein
    
    const fullMap = {
        // --- General Rules ---
        ...MAPPINGS.vowels,
        ...MAPPINGS.hindustani_consonants,
        ...MAPPINGS.hamza,
        ...MAPPINGS.arabic,

        // --- Specific Rules (Overwriting) ---
        ...MAPPINGS.initial_vowels, // 'ا' ko 'अ' banayega (na ke 'ा')
        ...MAPPINGS.final_vowels,   // 'ی' ko 'ी' banayega (na ke 'य')
        ...MAPPINGS.hamza_combo,    // Sabse specific combos

        // --- Baaqi cheezein ---
        ...MAPPINGS.numerals,
        ...MAPPINGS.punctuations,
    };

    // Step 2: Naya translator banayein
    const translator = new StringTranslator(fullMap);

    // Step 3: Button click par event listener
    const convertButton = document.getElementById('convert-btn');
    const urduInput = document.getElementById('urdu-input');
    const hindiOutput = document.getElementById('hindi-output');

    convertButton.addEventListener('click', () => {
        const urduText = urduInput.value;
        
        // Translator se text convert karein
        const hindiText = translator.translate(urduText);
        
        // Natija output box mein dikhayein
        hindiOutput.textContent = hindiText;
    });

});
