// Apni 'mappings.js' file ka poora purana code delete karein aur ye naya code paste karein
const MAPPINGS = {

  // Data from: arabic.csv
  arabic: {
    "إ": "इ",
    "أو": "ऊ"
  },

  // Data from: final_vowels.csv (Ye lafz ke AAKHIR mein aane wale hain)
  final_vowels: {
    "وں": "ों",
    "ی": "ी", // 'ki' ke liye
    "و": "ो", // 'chote' ke liye
    "ے": "े",
    "یں": "ें"
  },

  // Data from: hamza.csv
  hamza: {
    "ع": "", // Ain ko empty rakha hai (jaisa 'शाहद' mein chahiye)
    "أ": "अ",
    "ئ": "इ",
    "ۓ": "ए",
    "ؤ": "ओ",
    "ۂ": "ह"
  },

  // Data from: hamza_combo.csv
  hamza_combo: {
    "ئا": "िआ", "یئا": "ीआ", "یْئا": "य्आ", "ؤا": "ुआ", "وءا": "ूआ", "وْآ": "व्आ", "وْءا": "व्आ", "اءا": "ाआ", "ئو": "िओ", "یئو": "ीओ", "یْئو": "य्ओ", "ؤو": "ुओ", "وؤ": "ूओ", "وْؤ": "व्ओ", "اؤ": "ाओ", "آؤ": "आओ", "ئی": "ई", "یئی": "ीई", "یْئی": "य्ई", "وئی": "ुई", "وءی": "ूई", "وْءی": "व्ई", "وْئی": "व्ई", "ائی": "ाई", "آئی": "आई", "ئے": "ए", "یئے": "ीए", "یْئے": "य्ए", "وئے": "ुए", "وءے": "ूए", "وْءے": "व्ए", "وْئے": "व्ए", "ائے": "ाए", "آئے": "आए"
  },

  // Data from: hindustani_consonants.csv (Ye general hain)
  hindustani_consonants: {
    "ک": "क", "کھ": "ख", "ق": "क़", "خ": "ख़", "گ": "ग", "غ": "ग़", "ڳ": "ॻ", "گھ": "घ", "چ": "च", "چھ": "छ", "څ": "च़", "ڇ": "छ़", "ج": "ज", "جھ": "झ", "ڄ": "ॼ", "ز": "ज़", "ذ": "ज़़", "ض": "ॹ", "ظ": "ॹ़", "ژ": "झ़", "ڙ": "ष़", "ځ": "श़", "ٹ": "ट", "ٹھ": "ठ", "ݙ": "ॾ", "ڈ": "ड", "ڈھ": "ढ", "ڑ": "ड़", "ڑھ": "ढ़", "ت": "त", "تھ": "थ", "ط": "त़", "د": "द", "دھ": "ध", "ن": "न", "ݨ": "ण", "ن٘": "ङ", "ݩ": "ञ", "پ": "प", "پھ": "फ", "ف": "फ़", "ب": "ब", "ٻ": "ॿ", "بھ": "भ", "م": "म",
    "ی": "य", // 'paidaish' ke liye
    "ؠ": "ॺ", "ر": "र", "ل": "ल", "لؕ": "ळ",
    "و": "व", // 'woh' ke liye
    "ش": "श", "ݜ": "ष", "س": "स", "ص": "स़", "ث": "स़़", "ہ": "ह", "ح": "ह़", "ۃ": "ह॒", "ھ": "्ह" // 'ھ' ko 'h' se '्ह' kar diya hai
  },

  // Data from: initial_vowels.csv (FIXED)
  initial_vowels: {
    "ا": "अ",
    "آ": "आ",
    "ای": "ए", // 'ई' (eek) se 'ए' (ek) kar diya hai
    "او": "औ", // 'ऊ' (oor) se 'औ' (aur) kar diya hai
    "اَ": "अ", // Short vowels (agar hain)
    "اِ": "इ",
    "اُ": "उ"
  },

  // Data from: numerals.csv
  numerals: { "۰": "०", "۱": "१", "۲": "२", "۳": "३", "۴": "४", "۵": "५", "۶": "६", "۷": "७", "۸": "८", "۹": "९" },

  // Data from: punctuations.csv
  punctuations: { "۔": "।", "؟": "?", "،": ",", "۝": "॥", " ": " ", "\n": "\n" },

  // Data from: vowels.csv (General mid-word vowels)
  vowels: {
    "ں": "ं",
    "ے": "े",
    "یں": "ें",
    "ا": "ा", // 'a' ki 'alif' (jaise 'Shahid' mein 'sha')
    "آ": "आ",
    "ْ": "्"
  }
};
