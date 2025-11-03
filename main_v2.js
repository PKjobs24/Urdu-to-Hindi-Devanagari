// NAYA main_v2.js (ADVANCED LOGIC KE SAATH)

document.addEventListener('DOMContentLoaded', () => {

    // Elements ko select karein
    const convertButton = document.getElementById('convert-btn');
    const urduInput = document.getElementById('urdu-input');
    const hindiOutput = document.getElementById('hindi-output');

    if (!convertButton) {
        console.error("Button nahi mila!");
        return;
    }

    // Saari mappings ko ek bade map mein merge karein
    // **SAHI TARTIB (ORDER) ZAROORI HAI**
    // Specific cheezein (lambe combos) pehle, general cheezein (single char) baad mein
    const fullMap = {
        ...MAPPINGS.hamza_combo,
        ...MAPPINGS.initial_vowels,
        ...MAPPINGS.final_vowels,
        ...MAPPINGS.consonants,
        ...MAPPINGS.vowels,
        ...MAPPINGS.hamza,
        ...MAPPINGS.numerals,
        ...MAPPINGS.punctuations,
    };

    // Ek naya translator banayein jo multi-character mapping ko handle kar sake
    const translator = (text, map) => {
        // Sabse lambi keys pehle (taake 'ائے' pehle match ho, na ke 'ی')
        const keys = Object.keys(map).sort((a, b) => b.length - a.length);

        let regex = new RegExp(keys.map(k => k.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")).join('|'), 'g');

        return text.replace(regex, (match) => {
            return map[match];
        });
    };

    // Button click par function chalayein
    convertButton.addEventListener('click', () => {
        let urduText = urduInput.value;

        // --- PRE-PROCESSING RULES (Conversion se pehle) ---

        // 1. 'Paidaish' jaise lafzon ke liye logic: Agar 'ی' se pehle 'ا' (alif) ho,
        //    toh 'ی' ko 'ye' (य) nahi balke 'e' (ए) banayein taake woh 'ऐ' (ai) ban sake.

        // Note: Humne 'ای' aur 'او' ko MAPPINGS.initial_vowels mein hi fix kar diya hai.
        // Lekin 'paidaish' jaise mid-word ke liye ye rule zaroori hai.
        urduText = urduText.replace(/([اآ])ی/g, '$1ए'); // 'paidaish', 'bhai'

        // 2. 'Khud' jaise lafzon ke liye logic: (Complex rules for pesh/u)
        urduText = urduText.replace(/خود/g, 'ख़ुद'); // 'khud'
        urduText = urduText.replace(/مختلف/g, 'मुख़्तलिफ़'); // 'mukhtalif'
        urduText = urduText.replace(/پور/g, 'पूर'); // 'pur'
        urduText = urduText.replace(/متاثر/g, 'मुतास्सिर'); // 'mutaassir'

        // --- CONVERSION ---
        let hindiText = translator(urduText, fullMap);

        // --- POST-PROCESSING RULES (Conversion ke baad) ---

        // 1. 'Ain' (ع) ka rule: Agar 'अ' (jo 'ع' se bana hai) kisi consonant ke baad aaye,
        //    toh us 'अ' ko 'ा' (aa) mein badal dein, ya silent kar dein.
        //    Example: 'شअہد' -> 'शाहिद', 'बअद' -> 'बाद'
        hindiText = hindiText.replace(/([क-हक़-य़])अ/g, '$1ा'); // Consonant + 'अ' -> Consonant + 'ा'
        hindiText = hindiText.replace(/^अ/g, 'आ'); // Agar 'Ain' shuru mein ho (e.g., 'Ilm' -> 'अल्म' -> 'इल्म' - Ye complex hai, abhi 'A' karte hain)

        // 2. 'Gaon' ka rule: Agar 'ाओं' (aon) ho, toh usay 'ाँव' (aanv) banayein.
        hindiText = hindiText.replace(/ाओं/g, 'ाँव'); // 'गांव', 'पांव'

        // 3. 'Paidaish' ka final rule: 'ाए' ko 'ै' banayein.
        hindiText = hindiText.replace(/ाए/g, 'ै'); // 'पैदाइश'

        // 4. Double 'aa' ko fix karein (e.g., 'bataya' -> 'बतआ')
        hindiText = hindiText.replace(/तआ/g, 'ता'); // 'बताया'
        hindiText = hindiText.replace(/([क-हक़-य़])आ/g, '$1ा'); // 'बतआ' -> 'बता'


        // Natija output box mein dikhayein
        hindiOutput.textContent = hindiText;
    });

});
