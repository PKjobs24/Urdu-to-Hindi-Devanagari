// Is file ka poora purana code delete kar ke ye naya code paste karein
document.addEventListener('DOMContentLoaded', () => {
    
    // Step 1: Saari mapping files ko ek bade object mein merge karein
    // Is se har cheez (consonants, vowels, hamza, numbers) convert hogi
    const fullMap = {
        ...MAPPINGS.hamza_combo,
        ...MAPPINGS.hamza,
        ...MAPPINGS.initial_vowels,
        ...MAPPINGS.final_vowels,
        ...MAPPINGS.hindustani_consonants,
        ...MAPPINGS.vowels,
        ...MAPPINGS.numerals,
        ...MAPPINGS.punctuations,
        ...MAPPINGS.arabic
        // Aap yahan Sindhi maps bhi add kar sakte hain agar zaroorat ho
        // ...MAPPINGS.sindhi_consonants,
        // ...MAPPINGS.sindhi_final,
        // ...MAPPINGS.sindhi_isolated,
    };

    // Step 2: Full map ke saath naya translator banayein
    const translator = new StringTranslator(fullMap);

    // Step 3: Button click par event listener lagayein
    const convertButton = document.getElementById('convert-btn');
    const urduInput = document.getElementById('urdu-input');
    const hindiOutput = document.getElementById('hindi-output');

    convertButton.addEventListener('click', () => {
        const urduText = urduInput.value;
        
        // Step 4: Translator se text convert karein
        const hindiText = translator.translate(urduText);
        
        // Step 5: Natija output box mein dikhayein
        hindiOutput.textContent = hindiText;
    });

});
