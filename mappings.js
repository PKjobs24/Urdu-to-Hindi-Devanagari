// Apni 'mappings.js' file ka poora purana code delete karein aur ye naya code paste karein
const MAPPINGS = {
    // Sabse lambe aur specific combos pehle
    hamza_combo: { "ائے": "ाए", "آئے": "आए", "اؤ": "ाओ", "آؤ": "आओ", "ئی": "ई", "آئی": "आई", "ئے": "ए", "یئے": "ीए", "اوئے": "ओए", "گائے": "गाए", "لائے": "लाए", "جائے": "जाए" },
    
    // Final position vowels (lafz ke aakhir mein aane wale)
    final_vowels: { "ی": "ी", "ے": "े", "و": "ो", "وں": "ों", "یں": "ें" },
    
    // Consonants
    hindustani_consonants: { "ک": "क", "کھ": "ख", "ق": "क़", "خ": "ख़", "گ": "ग", "غ": "ग़", "گھ": "घ", "چ": "च", "چھ": "छ", "ج": "ज", "جھ": "झ", "ز": "ज़", "ذ": "ज़", "ض": "ज़", "ظ": "ज़", "ژ": "झ़", "ٹ": "ट", "ٹھ": "ठ", "ڈ": "ड", "ڈھ": "ढ", "ڑ": "ड़", "ڑھ": "ढ़", "ت": "त", "تھ": "थ", "ط": "त", "د": "द", "دھ": "ध", "ن": "न", "ں": "ं", "پ": "प", "پھ": "फ", "ف": "फ़", "ب": "ब", "بھ": "भ", "م": "म", "ر": "र", "ل": "ल", "ش": "श", "س": "स", "ص": "स", "ث": "स", "ہ": "ह", "ح": "ह", "ھ": "्ह" },

    // Initial position vowels (lafz ke shuru mein aane wale)
    initial_vowels: { "ا": "अ", "آ": "आ", "ای": "ई", "او": "ऊ" },
    
    // Mid-word vowels and other characters
    vowels: { "ی": "य", "و": "व", "ا": "ा" }, // 'a' ke liye 'alif'
    
    // Hamza aur Ain
    hamza: { "ئ": "इ", "ۓ": "ए", "ؤ": "ओ", "ء": "", "ع": "" }, // 'ain' ko silent rakha hai
    
    // Baaqi cheezein
    numerals: { "۰": "०", "۱": "१", "۲": "२", "۳": "३", "۴": "४", "۵": "५", "۶": "६", "۷": "७", "۸": "८", "۹": "९" },
    punctuations: { "۔": "।", "؟": "?", "،": ",", " ": " " }
};
