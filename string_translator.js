// string_translator.js
// Ye file str_mapper.py ka pure JavaScript version hai.
// MAPPINGS constant mappings.js se import hota hai.

class StringTranslator {
  constructor(maps) {
    this.maps = maps;    // object of all CSV mappings
  }

  translate(text, mapName) {
    if (!this.maps[mapName]) {
      console.error("Invalid map:", mapName);
      return text;
    }

    const map = this.maps[mapName];
    let output = "";
    let i = 0;

    while (i < text.length) {
      // 3-character match
      const three = text.slice(i, i + 3);
      if (map[three]) {
        output += map[three];
        i += 3;
        continue;
      }

      // 2-character match
      const two = text.slice(i, i + 2);
      if (map[two]) {
        output += map[two];
        i += 2;
        continue;
      }

      // single character match
      const one = text[i];
      if (map[one]) {
        output += map[one];
      } else {
        output += one; // fallback: character remains same
      }

      i++;
    }

    return output;
  }
}

// global translator object
const Translator = new StringTranslator(MAPPINGS);
