// NAYA MAPPINGS.JS
const MAPPINGS = {
  // Sabse pehle, specific multi-character combos
  // Data from: hamza_combo.csv (Aapke sample ke mutabiq 'visarga' hata diya gaya hai)
  hamza_combo: {
    "ئا": "िआ", "یئا": "ीआ", "یْئا": "य्आ", "ؤا": "ुआ", "وءا": "ूआ", "وْآ": "व्आ", "وْءا": "व्आ", "اءا": "ाआ", "ئو": "िओ", "یئو": "ीओ", "یْئو": "य्ओ", "ؤو": "ुओ", "وؤ": "ूओ", "وْؤ": "व्ओ", "اؤ": "ाओ", "آؤ": "आओ", "ئی": "ई", "یئی": "ीई", "یْئی": "य्ई", "وئی": "ुई", "وءی": "ूई", "وْءی": "व्ई", "وْئی": "व्ई", "ائی": "ाई", "آئی": "आई", "ئے": "ए", "یئے": "ीए", "یْئے": "य्ए", "وئے": "ुए", "وءے": "ूए", "وْءے": "व्ए", "وْئے": "व्ए", "ائے": "ाए", "آئے": "आए"
  },

  // Lafz ke shuru mein aane wale Vowels
  // Data from: initial_vowels.csv (FIXED)
  initial_vowels: {
    "ا": "अ",
    "آ": "आ",
    "ای": "ए", // "ek" ke liye
    "او": "औ", // "aur" ke liye
    "اَ": "अ",
    "اِ": "इ",
    "اُ": "उ"
  },

  // Lafz ke aakhir mein aane wale Vowels
  // Data from: final_vowels.csv
  final_vowels: {
    "وں": "ों",
    "ی": "ी", // "ki" ke liye
    "و": "ो", // "ko" ke liye
    "ے": "े", // "ke" ke liye
    "یں": "ें"
  },

  // Consonants
  // Data from: hindustani_consonants.csv
  consonants: {
    "ک": "क", "کھ": "ख", "ق": "क़", "خ": "ख़", "گ": "ग", "غ": "ग़", "ڳ": "ॻ", "گھ": "घ", "چ": "च", "چھ": "छ", "څ": "च़", "ڇ": "छ़", "ج": "ज", "جھ": "झ", "ڄ": "ॼ", "ز": "ज़", "ذ": "ज़", "ض": "ज़", "ظ": "ज़", "ژ": "झ़", "ڙ": "ड़", "ځ": "श़", "ٹ": "ट", "ٹھ": "ठ", "ݙ": "ॾ", "ڈ": "ड", "ڈھ": "ढ", "ڑ": "ड़", "ڑھ": "ढ़", "ت": "त", "تھ": "थ", "ط": "त", "د": "द", "دھ": "ध", "ن": "न", "ݨ": "ण", "ن٘": "ङ", "ݩ": "ञ", "پ": "प", "پھ": "फ", "ف": "फ़", "ب": "ब", "ٻ": "ॿ", "بھ": "भ", "م": "म",
    "ی": "य", // "bataya" ke liye
    "ؠ": "ॺ", "ر": "र", "ل": "ल", "لؕ": "ळ",
    "و": "व", // "woh" ke liye
    "ش": "श", "ݜ": "ष", "س": "स", "ص": "स", "ث": "स",
    "ہ": "ह", "ح": "ह", "ۃ": "ह", "ھ": "्ह"
  },

  // Beech mein aane wale Vowels aur modifiers
  // Data from: vowels.csv
  vowels: {
    "ں": "ं", // "gaon" ke liye (Chandrabindu logic main.js mein hai)
    "یں": "ें",
    "ا": "ा", // "ka" ke liye
    "آ": "आ",
    "ْ": "्" // Virama (halant)
  },

  // Hamza aur Ain
  // Data from: hamza.csv
  hamza: {
    "ع": "अ", // Isay hum logic se handle karenge
    "أ": "अ",
    "ئ": "इ",
    "ۓ": "ए",
    "ؤ": "ओ",
    "ۂ": "ह"
  },

  // Baaqi cheezein
  numerals: { "۰": "०", "۱": "१", "۲": "२", "۳": "३", "۴": "४", "۵": "५", "۶": "६", "۷": "७", "۸": "८", "۹": "९" },
  punctuations: { "۔": "।", "؟": "?", "،": ",", " ": " ", "\n": "\n" }
};
