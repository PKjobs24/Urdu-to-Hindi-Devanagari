function convertText() {
  const text = document.getElementById("inputBox").value;
  const translated = window.StringTranslator.convert(text);
  document.getElementById("outputBox").value = translated;
}
